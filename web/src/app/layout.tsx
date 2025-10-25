import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';

const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    title: 'spr_messenger',
    description: 'spr_messenger',
    // icons: {
    //     icon: '',
    // },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang='en' className={`${roboto.variable}`}>
            <body>
                {children}
            </body>
        </html>
    );
}