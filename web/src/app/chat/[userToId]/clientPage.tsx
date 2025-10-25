'use client'

import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import { Input } from '@/components/Input/Input';
import { MessagesList } from '@/components/MessagesList/MessagesList';
import { useMessages } from '@/hooks/useMessages';
import { useRedirect } from '@/hooks/useRedirect';
import { useSetup } from '@/hooks/useSetup';
import { useUser } from '@/hooks/useUser';
import { Message, MessageData } from '@/types/Message.interface';
import { User } from '@/types/User.interface';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';


const socket = io(process.env.NEXT_PUBLIC_DOMAIN);

interface ClientChatInterface {
    userTo: User;
}

export default function ClientChat({ userTo }: ClientChatInterface) {
    useRedirect('/chat/' + userTo.tgId);
    useUser();

    const { username, photoUrl } = userTo;

    const { user } = useSetup();
    const { messages: oldMessages } = useMessages(user?.tgId || 0, userTo.tgId || 0);

    const [messages, setMessages] = useState<MessageData[]>([]);
    const [message, setMessage] = useState<string>('');

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && message.trim() !== '') {
            const userFrom = user?.tgId || 0;

            const newMessage: Message = {
                message,
                userFrom: userFrom,
                userTo: userTo.tgId || 0,
            };

            socket.emit('sendMessage', newMessage);

            setMessage('');
            scrollToBottom();
        }
    };

    useEffect(() => {
        setMessages(oldMessages || []);

        socket.on("message", (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            scrollToBottom();
        });

        return () => {
            socket.off("message");
        };
    }, [oldMessages]);

    return (
        <main ref={messagesEndRef} className={styles.main}>
            <Header username={username} photoUrl={photoUrl} />
            <MessagesList messages={messages || []} />
            <Input text={'Сообщение...'} value={message}
                error={false} onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress} />
        </main>
    );
}
