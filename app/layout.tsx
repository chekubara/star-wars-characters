import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Header from "./components/layout/Header";
import ReactQueryProvider from "./components/providers/ReactQueryProvider";
import "./globals.css";

const ubuntu = Ubuntu({ weight: ["300", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Characters",
  description: "Simple Star Wars character cards page",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} bg-background-secondary text-primary`}
      >
        <ReactQueryProvider>
          <Header />
          <main className="md:container max-md:p-4 pt-4">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
