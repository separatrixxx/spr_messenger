import styles from './MessageItem.module.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { Htag } from '../../Common/Htag/Htag';
import { Message } from '../../../interfaces/message.interface';
import cn from 'classnames';


export const MessageItem = ({ message, user }: Message): JSX.Element => {
    const userIp = useSelector((state: AppState) => state.user.user);

    const myIps: string[] = ['212.3.150.154', '178.178.224.166', '31.173.82.221', '31.173.80.253']
    const isMe: boolean = myIps.includes(user);

    return (
        <div className={cn(styles.messageItem, {
            [styles.myMessage]: user === userIp.ip,
            [styles.admin]: isMe,
        })}>
            <Htag tag='m' className={styles.user}>
                {isMe ? 'Никита' : user}
            </Htag>
            <Htag tag='m' className={styles.message}>
                {message}
            </Htag>
        </div>
    );
};
