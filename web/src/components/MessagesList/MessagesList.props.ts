import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MessageData } from '@/types/Message.interface';


export interface MessagesListProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	messages: MessageData[],
}
