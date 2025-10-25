'use client'

import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import { useSetup } from '@/hooks/useSetup';
import { MyImage } from '../MyImage/MyImage';
import { logOut } from '@/utils/user.util';
import cn from 'classnames';


export default function Header({ username, photoUrl, isMe }: HeaderProps) {
    const { router, clearUser } = useSetup();

    const handleBack = () => {
        router.push('/chats');
    };

    const handleLogOut = () => {
        logOut({ router, clearUser });
    };

    const imageScale = 35;

    return (
        <header className={cn(styles.header, {
            [styles.headerNotMe]: !isMe,
        })}>
            {
                !isMe && (
                    <button className={styles.button} onClick={handleBack}>
                        Назад
                    </button>
                )
            }
            <div className={styles.headerDiv}>
                <span className={styles.username}>
                    {username}
                </span>
                {
                    isMe && (
                        <button className={styles.button} onClick={handleLogOut}>
                            Выйти
                        </button>
                    )
                }
            </div>
            <MyImage src={photoUrl} alt='profile image'
                width={imageScale} height={imageScale} />
        </header>
    );
}
