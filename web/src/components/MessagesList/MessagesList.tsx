'use client'

import { MessagesListProps } from './MessagesList.props';
import styles from './MessagesList.module.scss';
import { MessageItem } from '../MessageItem/MessageItem';
import { ReactElement } from 'react';


export const MessagesList = ({ messages, endRef }: MessagesListProps): ReactElement => {
    if (messages.length !== 0) {
        return (
            <div className={styles.messagesList}>
                {
                    messages.map(m => (
                        <MessageItem key={m.id} id={m.id} message={m.message} userFrom={m.userFrom}
                            userTo={m.userTo} createdAt={m.createdAt} />
                    ))
                }
                <div ref={endRef} />
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
