import { getUser } from "@/api/user.api";
import { ChatPageInterface } from "@/types/Chat.interface";
import { User } from "@/types/User.interface";
import { Metadata } from "next";
import ClientChat from "./clientPage";


export async function generateMetadata({ params }: ChatPageInterface): Promise<Metadata> {
    const resolvedParams = await params;
    const userToId = resolvedParams.userToId;

    try {
        const userTo: User = await getUser(+userToId) as User;

        return {
            title: userTo.username,
            description: `Чат с ${userTo.username}`,
        };
    } catch {
        return {
            title: '404',
        };
    }
}

export default async function Chat({ params }: ChatPageInterface) {
    const resolvedParams = await params;
    const userToId = resolvedParams.userToId;

    const userTo: User = await getUser(+userToId) as User;

    return (
        <ClientChat userTo={userTo} />
    );
}