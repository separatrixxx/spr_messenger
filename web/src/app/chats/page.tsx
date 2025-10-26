'use client'

import styles from './page.module.scss';
import { useRedirect } from "@/hooks/useRedirect";
import { useSetup } from "@/hooks/useSetup";
import { useUser, useUsers } from "@/hooks/useUser";
import { useMemo } from 'react';
import Header from '@/components/Header/Header';
import { ChatList } from '@/components/ChatList/ChatList';


export default function Chats() {
    useRedirect();
    useUser();

    const { user } = useSetup();
    const { users: allUsers = [] } = useUsers();

    // const [query, setQuery] = useState<string>('');

    const users = useMemo(() =>
        allUsers.filter(u => u.tgId !== user?.tgId),
    [allUsers, user]);
    
    // const searched = useMemo(
    //     () => users.filter(u =>ч
    //         u.username.toLowerCase().includes(query.toLowerCase())
    //     ),
    //     [users, query]
    // );

    return (
        <main className={styles.main}>
            <Header username={user?.username} photoUrl={user?.photoUrl} isMe={true} />

            <ChatList chats={users} />
        </main>
    );
}
