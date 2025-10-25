import { IS_SIGNED_KEY } from "@/constants";
import { removeFromStorage } from "./storage.util";


export function logOut({ router, clearUser }: { router: any, clearUser: () => void }) {
    removeFromStorage(IS_SIGNED_KEY);
    clearUser();
    
    router.push('/');
}

