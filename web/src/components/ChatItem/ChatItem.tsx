import { ChatItemProps } from './ChatItem.props';
import styles from './ChatItem.module.scss';
import { ReactElement } from 'react';
import { MyImage } from '../MyImage/MyImage';
import Link from 'next/link';


export const ChatItem = ({ tgId, username, photoUrl }: ChatItemProps): ReactElement => {
    const imageScale = 40;

    return (
        <Link href={'/chat/' + tgId} className={styles.chatItem}>
            <MyImage src={photoUrl} alt={username + ' profile image'}
                width={imageScale} height={imageScale} />
            <span className={styles.username}>
                {username}
            </span>
        </Link>
    );
}
