'use client'

import styles from './InOnline.module.scss';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';


export default function InOnline() {
    const [isOnline, setIsOnline] = useState<boolean>(false);

    useEffect(() => {
        setIsOnline(navigator.onLine);

        const goOnline = () => setIsOnline(true);
        const goOffline = () => setIsOnline(false);

        window.addEventListener('online', goOnline);
        window.addEventListener('offline', goOffline);

        return () => {
            window.removeEventListener('online', goOnline);
            window.removeEventListener('offline', goOffline);
        };
    }, []);

    if (isOnline) {
        return null;
    }

    return (
        <span className={styles.inOnline}>
            <Spinner size='s' />
            {'Подключение...'}
        </span>
    );
}
