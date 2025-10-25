'use client'

import { useRedirect } from "@/hooks/useRedirect";


export default function Home() {
    useRedirect();

    return <div>Loading...</div>;
}
