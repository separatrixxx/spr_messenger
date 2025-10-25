import { useEffect } from 'react';
import { useSetup } from './useSetup';
import { getFromStorage } from '@/utils/storage.util';
import { IS_SIGNED_KEY } from '@/constants';


export const useRedirect = (page?: string) => {
    const { router } = useSetup();

    useEffect(() => {
        const isSigned = getFromStorage(IS_SIGNED_KEY);

        if (isSigned) {
            router.push(page || '/chats');
        } else {
            router.push('/auth');
        }
    }, [router]);
};
