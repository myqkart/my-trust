"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="section-padding flex flex-1 flex-col items-center justify-center bg-background px-4 text-center sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
        Something went wrong
      </p>
      <h1 className="font-heading max-w-lg text-3xl font-bold text-primary sm:text-4xl">
        We couldn&apos;t load this page
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Please try again. If the problem continues, reach out and we&apos;ll help
        you find what you need.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex h-14 items-center justify-center rounded-[var(--radius-button)] bg-primary px-8 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Try again
      </button>
    </main>
  );
}
