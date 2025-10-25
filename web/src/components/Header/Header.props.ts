import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
    username?: string;
    photoUrl?: string;
    isMe?: boolean;
}
