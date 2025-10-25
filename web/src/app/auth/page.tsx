'use client'

import TelegramAuthWidget from "@/components/TelegramAuthWidget/TelegramAuthWidget";
import { useRedirect } from "@/hooks/useRedirect";


export default function Auth() {
    useRedirect();
    
    return (
        <TelegramAuthWidget />
    );
}
