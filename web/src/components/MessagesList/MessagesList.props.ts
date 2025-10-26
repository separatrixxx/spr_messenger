import { DetailedHTMLProps, HTMLAttributes, RefObject } from 'react';
import { MessageData } from '@/types/Message.interface';


export interface MessagesListProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	messages: MessageData[],
	endRef: RefObject<HTMLDivElement | null>;
}
