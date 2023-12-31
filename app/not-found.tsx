import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Star Wars Characters",
  description: "This isn't the page you're looking for.",
};

const NotFound = () => {
  return (
    <div className="flex items-center justify-center mt-10 flex-row">
      <div className="text-center">
        <h1 className="text-secondary text-2xl mb-2 font-bold">Not Found</h1>
        <Image
          src="/404.jpg"
          alt="Obi-Wan Kenobi waving his hand"
          width={400}
          height={300}
          priority
          className="mb-4 rounded-2xl shadow-xl border-secondary border-0"
        />
        <p className="text-xl text-primary mb-4 border-primary border-0">
          &quot;This isn&apos;t the page you&apos;re looking for.&quot;
        </p>
        <Link href="/" className="text-secondary hover:underline">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
