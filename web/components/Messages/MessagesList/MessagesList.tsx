import { MessagesListProps } from './MessagesList.props';
import styles from './MessagesList.module.css';
import { useRouter } from 'next/router';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MessageItem } from '../MessageItem/MessageItem';
import { useEffect, useRef } from 'react';


export const MessagesList = ({ messages }: MessagesListProps): JSX.Element => {
    const router = useRouter();
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
                    messages.map((m, i) => (
                        <MessageItem key={m.message + i} message={m.message} user={m.user} />
                    ))
                }
                <div ref={messagesEndRef} />
            </div>
        );
    } else {
        return (
            <Htag tag='l' className={styles.noMessages}>
                {setLocale(router.locale).no_messages}
            </Htag>
        );
    }
};
