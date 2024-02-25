'use client';

import { useRouter } from 'next/navigation';
import s from './page.module.sass';
import Link from 'next/link';

export default function NotFound() {
    const router = useRouter();

    return (
        <main className={s.mainError}>
            <h2 className={s.titleError}>
                <u>404</u> Not Found
            </h2>
            <p className={s.contentError}>You lost yourself</p>
            <button className={s.buttonError} onClick={() => router.back()}>
                Click here to go back
            </button>
            or
            <Link href={'/'} className={s.buttonError}>
                Go home
            </Link>
        </main>
    );
}
