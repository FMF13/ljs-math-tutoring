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

        <section className="mt-12 rounded-2xl bg-zinc-100 p-8">
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/book"
              className="w-fit rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a session
            </Link>

            <Link href="/" className="text-sm hover:underline">
              ← Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
