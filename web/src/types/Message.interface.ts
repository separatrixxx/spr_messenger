export interface Message {
    message: string;
    userFrom: number;
    userTo: number;
}

export interface MessageData extends Message {
    id: number;
    createdAt: string;
}
