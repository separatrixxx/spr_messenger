'use client'

import { createUser } from "@/api/user.api";
import { IS_SIGNED_KEY } from "@/constants";
import { useSetup } from "@/hooks/useSetup";
import { User } from "@/types/User.interface"
import { saveToStorage } from "@/utils/storage.util";
import Script from "next/script"
import { useEffect, useRef } from "react"


export default function TelegramAuthWidget() {
    const { router, setUser } = useSetup();
    
    const widgetDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() =>  {
        window.onTelegramAuth = async (user: User) => {
            await createUser(user);
            
            saveToStorage(IS_SIGNED_KEY, String(user.id));
            setUser(user);

            router.push('/chats');
        }
    }, [])

    useEffect(() => {
        if (!widgetDiv.current) return

        if (widgetDiv.current.childNodes.length === 0) {
            const script = document.createElement('script')
            script.src = "https://telegram.org/js/telegram-widget.js?22"
            script.async = true
            script.setAttribute('data-telegram-login', 'spr_messenger_bot')
            script.setAttribute('data-size', 'large')
            script.setAttribute('data-userpic', 'false')
            script.setAttribute('data-onauth', 'onTelegramAuth(user)')
            script.setAttribute('data-request-access', 'write')
            widgetDiv.current.appendChild(script)
        }
    }, [])

    return (
        <>
            <Script
                async
                src="https://telegram.org/js/telegram-widget.js?22"
                strategy="afterInteractive"
            />
            <div ref={widgetDiv} />
        </>
    )
}
