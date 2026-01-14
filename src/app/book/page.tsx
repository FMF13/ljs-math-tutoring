"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const GETFORM_ENDPOINT = "https://getform.io/f/bkkepqvb"

export default function BookPage() {
  const router = useRouter()
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsSending(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const res = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (!res.ok) {
        throw new Error("Submit failed. Please try again.")
      }

      // Go to your own thank-you page
      router.push("/thanks")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
      setIsSending(false)
    }
  }

  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border">
        <h1 className="text-2xl font-semibold">Book a Session</h1>
        <p className="mt-2 text-sm text-zinc-600">
          A response will be sent to your email with more information.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Full name"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Grade / Course</label>
            <input
              name="course"
              type="text"
              placeholder="e.g. Grade 12, Calc 1000"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Topic</label>
            <textarea
              name="topic"
              placeholder="What do you want help with?"
              className="mt-1 w-full rounded-xl border px-3 py-2"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={isSending}
              className="w-fit rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
            >
              {isSending ? "Sending…" : "Submit"}
            </button>

            <Link href="/" className="text-sm hover:underline">
              ← Back to home
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
