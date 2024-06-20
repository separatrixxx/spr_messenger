import { LocaleChangeProps } from './LocaleChange.props';
import styles from './LocaleChange.module.css';
import { useRouter } from 'next/router';
import { Htag } from '../Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { AppState } from '../../../features/store/store';
import { useSelector } from 'react-redux';


export const LocaleChange = ({ setActive }: LocaleChangeProps): JSX.Element => {
    const router = useRouter();

    return (
        <Htag tag='m' className={styles.lang} onClick={() => setActive(true)}>
            {setLocale(router.locale).lang}
        </Htag>
    );
};
