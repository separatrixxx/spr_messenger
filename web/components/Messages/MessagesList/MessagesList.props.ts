import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Message } from '../../../interfaces/message.interface';


export interface MessagesListProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	messages: Message[],
}
