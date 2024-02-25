'use client';

import { useRouter } from 'next/navigation';
import s from './page.module.sass';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    const router = useRouter();

    return (
        <main className={s.main}>
            <h2 className={s.title}>Something went wrong!</h2>
            <div className={s.message}>
                <p className={s.content}>Error:</p>
                <code>{error.message}</code>
            </div>
            <button className={s.back} onClick={() => reset()}>
                Try again
            </button>
            or
            <button className={s.back} onClick={() => router.back()}>
                Go back
            </button>
        </main>
    );
}
