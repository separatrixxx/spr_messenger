import { getData, postData } from "./base.api";
import { Message, MessageData } from "@/types/Message.interface";


export const createMessage = async (message: Message): Promise<Message> => {
    const url = process.env.NEXT_PUBLIC_DOMAIN;

    return postData<Message>(url + `/api/message`, {
        data: {
            message: message.message,
            userFrom: message.userFrom,
            userTo: message.userTo,
        }
    });
};

export const getMessages = async (userFrom: number, userTo: number): Promise<MessageData[]> => {
    const url = process.env.NEXT_PUBLIC_DOMAIN;

    return getData<MessageData[]>(url + `/api/messages/dialog/${userFrom}/${userTo}`);
};
