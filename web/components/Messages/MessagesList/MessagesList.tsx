import { MessagesListProps } from './MessagesList.props';
import styles from './MessagesList.module.css';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MessageItem } from '../MessageItem/MessageItem';


export const MessagesList = ({ messages }: MessagesListProps): JSX.Element => {
    const router = useRouter();
    
    if (messages.length !== 0) {
        return (
            <div className={styles.messagesList}>
                {
                    messages.map((m, i) => (
                        <MessageItem key={m.message + i} message={m.message} user={m.user} />
                    ))
                }
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
