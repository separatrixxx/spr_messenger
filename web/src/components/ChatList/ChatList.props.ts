import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { User } from '@/types/User.interface';


export interface ChatListProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    chats: User[];
}
