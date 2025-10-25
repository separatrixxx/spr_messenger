import { User, UserNotFound, Users } from "@/types/User.interface";
import { getData, postData } from "./base.api";


export const createUser = async (user: User): Promise<User> => {
    const url = process.env.NEXT_PUBLIC_DOMAIN;

    const userData = await getUser(user.id);

    if (!('notFound' in userData) || !userData.notFound) {
        return user;
    }

    return postData<User>(url + `/api/tg-users`, {
        data: {
            tgId: user.id,
            username: user.username,
            photoUrl: user.photo_url,
        }
    });
};

export const getUser = async (id: number): Promise<User | UserNotFound> => {
    const url = process.env.NEXT_PUBLIC_DOMAIN;

    return getData<User>(url + `/api/tg-users/tg-id/${id}`);
};


export const getUsers = async (): Promise<Users> => {
    const url = process.env.NEXT_PUBLIC_DOMAIN;

    return getData<Users>(url + `/api/tg-users?pagination[limit]=1000`);
};
