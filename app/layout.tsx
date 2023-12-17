import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ReactQueryProvider from "./components/providers/ReactQueryProvider";
import "./globals.css";

const ubuntu = Ubuntu({ weight: ["300", "500", "700"], subsets: ["latin"] });

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
          <main className="xl:container max-xl:px-8 max-xl:py-4 pt-4 min-h-[calc(100vh-132px)]">
            {children}
          </main>
          <Footer />
        </ReactQueryProvider>
        <div id="menu-portal"></div>
      </body>
    </html>
  );
};

export default RootLayout;
