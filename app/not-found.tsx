import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <main className="section-padding flex flex-1 flex-col items-center justify-center bg-background px-4 text-center sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
        404
      </p>
      <h1 className="font-heading max-w-xl text-3xl font-bold text-primary sm:text-4xl">
        The page you&apos;re looking for couldn&apos;t be found, but our mission
        continues.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Explore our work, meet the people we support, or return home to begin
        again.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href={ROUTES.home}
          className="inline-flex h-14 items-center justify-center rounded-[var(--radius-button)] bg-primary px-8 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-secondary"
        >
          Back Home
        </Link>
        <Link
          href={ROUTES.donate}
          className="inline-flex h-14 items-center justify-center rounded-[var(--radius-button)] border border-secondary bg-white px-8 text-base font-semibold text-primary transition duration-200 hover:bg-soft/40"
        >
          Support Our Mission
        </Link>
      </div>
    </main>
  );
}
