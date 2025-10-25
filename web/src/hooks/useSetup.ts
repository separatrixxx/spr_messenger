import { useUsersStore, useUserStore } from "@/store/user.store";
import { useRouter } from "next/navigation";


export const useSetup = () => {
    const router = useRouter();

    const { user, setUser, clearUser } = useUserStore();
    const { users, setUsers, clearUsers } = useUsersStore();

    return {
        router,
        user,
        setUser,
        clearUser,
        users,
        setUsers,
        clearUsers,
    };
};
