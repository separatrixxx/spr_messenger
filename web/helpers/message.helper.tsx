import axios, { AxiosResponse } from "axios";
import { MessageData } from "../interfaces/message.interface";
import { setMessages } from "../features/messages/messagesSlice";


export async function getMessages(dispatch: any) {
    try {
        const { data : response }: AxiosResponse<MessageData> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/messages');

        dispatch(setMessages(response.data));
    } catch (err) {
        console.log(err);
    }
}

export async function sendMessage(message: string, userIp: string): Promise<void> {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/messages', {
            data: {
                message: message,
                user: userIp,
            }
        });

        if (response.status !== 200) {
            console.error('Failed to send message:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending message:', error);
    }
}
