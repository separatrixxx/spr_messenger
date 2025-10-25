'use client'

import { MessagesListProps } from './MessagesList.props';
import styles from './MessagesList.module.scss';
import { MessageItem } from '../MessageItem/MessageItem';
import { ReactElement, useEffect, useRef } from 'react';


export const MessagesList = ({ messages }: MessagesListProps): ReactElement => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    if (messages.length !== 0) {
        return (
            <div className={styles.messagesList}>
                {
                    messages.map(m => (
                        <MessageItem key={m.id} id={m.id} message={m.message} userFrom={m.userFrom}
                            userTo={m.userTo} createdAt={m.createdAt} />
                    ))
                }
                <div ref={messagesEndRef} />
            </div>
        );
    } else {
        return (
            <h1 className={styles.noMessages}>
                {'Нет сообщений'}
            </h1>
        );
    }
};
