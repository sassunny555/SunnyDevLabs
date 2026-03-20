import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunny Alam | Web Developer, App Developer & UI/UX Designer",
  description:
    "Portfolio of Sunny Alam, a web developer, app developer, and UI/UX designer building modern digital products from concept to launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]">{children}</body>
    </html>
  );
}
