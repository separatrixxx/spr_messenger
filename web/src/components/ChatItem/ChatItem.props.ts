import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ChatItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
    tgId: number;
    username: string;
    photoUrl?: string;
}
