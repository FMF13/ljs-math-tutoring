import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="mt-4 text-zinc-700">
          Hi, we're <strong>LJStutoring</strong>. We are university students at
          Western that tutor students in elementary school, high school and first-year university
          math. Our focus is building strong fundamentals, showing clear steps,
          and by helping you feel confident on tests, assignments and exams, we ensure real understanding and success.
        </p>

        <h2 className="mt-10 text-xl font-semibold">How we tutor</h2>
        <ul className="mt-3 space-y-2 text-zinc-700">
          <li>• Quick diagnostic to find exactly what’s missing</li>
          <li>• Clear examples → guided practice → independent practice</li>
          <li>• A short recap + practice plan after each session</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold">What we tutor</h2>
        <p className="mt-3 text-zinc-700">
          Elementary grade math, Grades 9-12 math, first-year university calculus, linear algebra, and finite math.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Where we tutor</h2>
        <p className="mt-3 text-zinc-700">
          Tutor sessions are held online via Zoom or Google Meet for convenience and flexibility, allowing students to join from anywhere.  If you prefer in-person tutoring and are located in Barrie or London Ontario, we can arrange sessions at a public location like a library or cafe per request.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Experience</h2>
        <p className="mt-3 text-zinc-700">
          All tutors have prior relevant experience tutoring elementary, high school and university math to over 25 studens and they themselves have excelled in their math courses.  Each tutor is evaluated to ensure they can explain concepts clearly and help students build confidence in math.
        </p>

        <section className="mt-12 rounded-2xl bg-white p-8">
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
