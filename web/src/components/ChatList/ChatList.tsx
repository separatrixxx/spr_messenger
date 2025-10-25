import { ChatListProps } from './ChatList.props';
import styles from './ChatList.module.scss';
import { ReactElement } from 'react';
import { ChatItem } from '../ChatItem/ChatItem';


export const ChatList = ({ chats }: ChatListProps): ReactElement => {
    return (
        <div className={styles.chatList}>
            {chats.map(c => (
                <ChatItem key={c.tgId} tgId={c.tgId || 0} username={c.username}
                    photoUrl={c.photoUrl} />
            ))}
        </div>
    );
}
