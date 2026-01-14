"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function ThanksPage() {
  const [secondsLeft, setSecondsLeft] = useState(15)

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1)
    }, 1000)

    // Redirect timer
    const timeout = setTimeout(() => {
      window.location.href = "/"
    }, 15000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center border">
        <h1 className="text-2xl font-semibold">Thank you! </h1>

        <p className="mt-3 text-sm text-zinc-600">
          Your request was sent successfully. A response will be sent soon.
        </p>

        <p className="mt-3 text-xs text-zinc-500">
          Redirecting to home in <strong>{secondsLeft}</strong> seconds…
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Go back now
          </Link>
        </div>
      </div>
    </main>
  )
}
