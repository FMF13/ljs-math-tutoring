import Link from "next/link";

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Policies</h1>

        <h2 className="mt-8 text-xl font-semibold">Payment</h2>
        <p className="mt-2 text-zinc-700">
          Payment is due before each session (or upfront for packages).
          E-transfer preferred.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Cancellation</h2>
        <p className="mt-2 text-zinc-700">
          We know sudden issues arrise, all we ask is to please cancel or reschedule at least 12 hours in advance.
        </p>

        <h2 className="mt-8 text-xl font-semibold">No Stress Refund Policy</h2>
        <p className="mt-2 text-zinc-700">
          If you’re unsatisfied after the first session or felt dissapointed, a full refund will be issued no questions asked hassle free.
        </p>

        <Link href="/" className="mt-10 inline-block hover:underline">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
