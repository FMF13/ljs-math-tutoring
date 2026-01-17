import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "LJS Math Tutoring",
  description: "Personalized math tutoring for high school and university",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white text-zinc-900`}
      >
        {/* GLOBAL HEADER */}
        <header className="border-b">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/LJS.png"
                alt="LJS Math Tutoring logo"
                width={36}
                height={36}
                priority
              />
              <span className="font-semibold">LJS Math Tutoring</span>
            </Link>

            <nav className="text-sm flex flex-wrap justify-end gap-x-4 gap-y-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
      

              <span className="mx-1 text-zinc-300">|</span>

              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/policies" className="hover:underline">
                Policies
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="min-h-[calc(100vh-64px)]">{children}</main>

        {/* GLOBAL FOOTER */}
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} LJS Math Tutoring. All rights reserved.
            </p>

            <div className="flex gap-4 text-sm">
              <Link href="/policies" className="text-zinc-600 hover:underline">
                Policies
              </Link>
              <Link href="/services" className="text-zinc-600 hover:underline">
                Services
              </Link>
              <Link href="/book" className="text-zinc-600 hover:underline">
                Book
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
