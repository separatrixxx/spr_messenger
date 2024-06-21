import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { Input } from '../../components/Common/Input/Input';
import { AppState } from '../../features/store/store';
import { MessagesList } from '../../components/Messages/MessagesList/MessagesList';
import { Message } from '../../interfaces/message.interface';
import { io } from "socket.io-client";


const socket = io("https://messenger.banana.codes");

export const MainPage = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: AppState) => state.user.user);
    const messagesFromStore = useSelector((state: AppState) => state.messages.messages);

    const [messages, setMessages] = useState<Message[]>(messagesFromStore);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        setMessages(messagesFromStore);

        socket.on("message", (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            scrollToBottom();
        });

        return () => {
            socket.off("message");
        };
    }, [dispatch, messagesFromStore]);

    const [message, setMessage] = useState<string>('');

    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && message.trim() !== '') {
            const newMessage = {
                message,
                user: user.ip,
            };
            socket.emit("sendMessage", newMessage);
            setMessage('');
            scrollToBottom();
        }
    };

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
            <div className={styles.wrapper}>
                <MessagesList messages={messages} />
                <Input text={setLocale(router.locale).message + '...'} value={message}
                    error={false} onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress} />
                <div ref={messagesEndRef} />
            </div>
        </>
    );
};
