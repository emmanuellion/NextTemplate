'use client';

import { useRouter } from 'next/navigation';
import s from './page.module.sass';
import Link from 'next/link';

export default function NotFound() {
    const router = useRouter();

    return (
        <main className={s.main}>
            <h2 className={s.title}>
                <u>404</u> Not Found
            </h2>
            <p className={s.content}>You lost yourself</p>
            <button className={s.back} onClick={() => router.back()}>
                Click here to go back
            </button>
            or
            <Link href={'/'} className={s.back}>
                Go home
            </Link>
        </main>
    );
}
