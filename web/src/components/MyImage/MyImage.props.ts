import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface MyImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src?: string;
    alt: string;
    width?: number;
    height?: number;
}
