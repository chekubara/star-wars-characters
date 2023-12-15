import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Star Wars Characters",
  description: "Simple Star Wars Characters app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
