import useSWR from "swr";
import { getMessages } from "@/api/messages.api";


export const useMessages = (userFrom: number, userTo: number) => {
    const { data: messages, error, isLoading } = useSWR(
        `/api/messages/dialog/${userFrom}/${userTo}`,
        () => getMessages(userFrom, userTo),
        { revalidateOnFocus: false }
    );

    return { messages, error, isLoading };
};
