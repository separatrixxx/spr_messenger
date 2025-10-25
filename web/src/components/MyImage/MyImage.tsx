import { MyImageProps } from './MyImage.props';
import styles from './MyImage.module.scss';
import { ReactElement } from "react";
import Image from 'next/image';
import cn from 'classnames';


export const MyImage = ({ src, alt, width, height, className }: MyImageProps): ReactElement => {
    if (!src) {
        return (
            <div className={styles.fallback} style={{ width: width, height: height }} />
        );
    }

    return (
        <Image className={cn(styles.myImage, className)} draggable='false'
            loader={() => src}
            src={src}
            alt={alt}
            width={width || 1}
            height={height || 1}
            priority={false}
        />
    );
}
