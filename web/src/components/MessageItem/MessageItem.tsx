'use client'

import styles from './MessageItem.module.scss';
import { ReactElement } from 'react';
import { MessageData } from '@/types/Message.interface';
import { useSetup } from '@/hooks/useSetup';
import { format, parseISO } from 'date-fns';
import cn from 'classnames';


export const MessageItem = ({ message, userFrom, createdAt}: MessageData): ReactElement => {
    const { user } = useSetup();

    const date = parseISO(createdAt);
    const formattedDate = format(date, 'HH:mm dd.MM.yyyy');

    return (
        <div className={cn(styles.messageItem, {
            [styles.myMessage]: userFrom === user?.tgId,
        })}>
            <h1 className={styles.message}>
                {message}
            </h1>
            <span className={styles.date}>
                {formattedDate}
            </span>
        </div>
    );
};
