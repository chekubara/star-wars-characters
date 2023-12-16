import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center mt-10 flex-row">
      <div className="text-center">
        <h1 className="text-secondary text-2xl mb-2 font-bold">Not Found</h1>
        <Image
          src="/404.jpg"
          alt="Vercel Logo"
          width={400}
          height={300}
          priority
          className="mb-4 rounded-2xl shadow-xl"
        />
        <p className="text-xl text-primary mb-4">
          "This isn't the page you're looking for."
        </p>
        <Link href="/" className="text-secondary hover:underline">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;