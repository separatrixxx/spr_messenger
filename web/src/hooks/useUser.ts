import { useSetup } from "./useSetup";
import { useEffect } from "react";
import { getFromStorage } from "@/utils/storage.util";
import { IS_SIGNED_KEY } from "@/constants";
import { getUser, getUsers } from "@/api/user.api";
import useSWR from "swr";
import { User } from "@/types/User.interface";


export const useUser = () => {
    const { setUser } = useSetup();
    const userId = getFromStorage(IS_SIGNED_KEY);

    const { data: user, error, isLoading } = useSWR(
        userId ? `/api/tg-users/tg-id/${userId}` : null,
        () => getUser(+(userId || '')),
        { revalidateOnFocus: false }
    );

    useEffect(() => {
        if (user) {
            setUser(user as User);
        }
    }, [user, setUser]);

    return { user, error, isLoading };
};

export const useUsers = () => {
    const { setUsers } = useSetup();

    const { data: users, error, isLoading } = useSWR(
        `/api/tg-users`,
        () => getUsers(),
        { revalidateOnFocus: false }
    );

    useEffect(() => {
        if (users) {
            setUsers(users.data);
        }
    }, [users, setUsers]);

    return { users: users?.data || [], error, isLoading };
};
