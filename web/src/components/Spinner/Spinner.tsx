import { SpinnerProps } from './Spinner.props';
import styles from './Spinner.module.scss';
import { ReactElement } from 'react';
import cn from 'classnames';


export const Spinner = ({ size }: SpinnerProps): ReactElement => {
    return (
        <div className={cn(styles.spinner, {
            [styles.sizeL]: size === 'l',
            [styles.sizeS]: size === 's',
        })} />
    );
};