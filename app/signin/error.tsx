"use client"

import { useEffect } from "react";

export default function Error({
    error, reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main>
            <h2>Something went wrong!</h2>
            <p>Error: {error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </main>
    );
}