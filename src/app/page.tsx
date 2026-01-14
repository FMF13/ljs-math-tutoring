import Link from "next/link";
import Testimonials from "./components/Testimonials";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });




export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Clear, confidence-building math tutoring
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-2xl">
          Not everyone finds math easy and not everyone learns the same way. Our mission is to make math clear and accessible for every student by providing personalized, patient, affordable and effective tutoring that builds both understanding and confidence.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="/book"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-white text-sm font-medium hover:bg-zinc-800"
          >
            Book a session
          </a>

          <Link
            href="/services"
            className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-zinc-50"
          >
            View services
          </Link>
        </div>
      </section>

      <Testimonials />



      <section id="mission" className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Our Mission </h2>
          <p className={`mt-4 ${poppins.className} text-zinc-600 max-w-2xl`}>
          Not everyone finds math easy and not everyone learns the same way. Our mission is to make math clear and accessible for every student by providing personalized, patient, affordable and effective tutoring that builds both understanding and confidence.
        </p>
        </div>
      </section>

      {/* <section id="contact" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          {/* <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-zinc-600">
            Email me with your course, topic, and availability.
          </p> */}

          {/* <p className="mt-6 text-sm">
            📧 <strong>yourname@email.com</strong>
          </p> */}
        {/* </div>
      // </section> */} 
    </main>
  );
}
