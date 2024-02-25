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
        <main className={s.mainError}>
            <h1 className={s.titleError}>Something went wrong!</h1>
            <div className={s.messageError}>
                <p className={s.contentError}>Error:</p>
                <code>{error.message}</code>
            </div>
            <button className={s.buttonError} onClick={() => reset()}>
                Try again
            </button>
            or
            <button className={s.buttonError} onClick={() => router.back()}>
                Go back
            </button>
        </main>
    );
}
