import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import { ReactElement } from 'react';
import cn from 'classnames';


export const Input = ({ text, value, error, onChange, onKeyPress }: InputProps): ReactElement => {    
	return <input className={cn(styles.input, {
        [styles.error_input]: error,
    })}
        placeholder={text}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        type='text'
        name='text input'
        aria-label='text input' />;
};