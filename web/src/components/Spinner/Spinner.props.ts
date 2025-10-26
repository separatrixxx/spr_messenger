import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SpinnerProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	size: 'l' | 's';
}
