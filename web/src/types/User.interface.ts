export interface User {
    id: number;
    tgId?: number;
    username: string;
    photoUrl?: string;
    photo_url?: string;
}

export interface Users {
    data: User[];
}

export interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

export interface UsersState {
    users: User[] | null;
    setUsers: (user: User[]) => void;
    clearUsers: () => void;
}

export interface UserNotFound {
    notFound: boolean;
}
