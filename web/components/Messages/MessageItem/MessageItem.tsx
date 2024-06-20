import styles from './MessageItem.module.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { Htag } from '../../Common/Htag/Htag';
import { Message } from '../../../interfaces/message.interface';
import cn from 'classnames';


export const MessageItem = ({ message, user }: Message): JSX.Element => {
    const userIp = useSelector((state: AppState) => state.user.user);

    return (
        <div className={cn(styles.messageItem, {
            [styles.myMessage]: user === userIp.ip,
        })}>
            <Htag tag='m' className={styles.user}>
                {user}
            </Htag>
            <Htag tag='m' className={styles.message}>
                {message}
            </Htag>
        </div>
    );
};
