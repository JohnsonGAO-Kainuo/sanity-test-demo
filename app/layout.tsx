import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Sanity Site",
  description: "A clean 2-page site powered by Sanity CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-6 bg-white border-b">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">MySite</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-600">首頁 (Home)</Link>
              <Link href="/about" className="hover:text-blue-600">關於我們 (About)</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
