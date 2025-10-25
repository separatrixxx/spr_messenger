import { create } from 'zustand'
import { UsersState, UserState } from '@/types/User.interface';


export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
}));

export const useUsersStore = create<UsersState>((set) => ({
    users: null,
    setUsers: (users) => set({ users }),
    clearUsers: () => set({ users: null }),
}));
