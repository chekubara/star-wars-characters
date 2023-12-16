import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  page: number;
  isPrev: boolean;
  isNext: boolean;
  firstPageUrl?: string;
}

const Pagination = ({ url, page, isPrev, isNext, firstPageUrl }: Props) => {
  return (
    <div className="flex space-x-5 justify-center">
      {isPrev ? (
        <Link
          href={`${
            page - 1 === 1 && firstPageUrl ? firstPageUrl : `${url}/${page - 1}`
          }`}
        >
          « Previous
        </Link>
      ) : (
        <div className="opacity-50">« Previous</div>
      )}
      <span>|</span>
      <div>Page: {page}</div>
      <span>|</span>
      {isNext ? (
        <Link href={`${url}/${page + 1}`}>Next »</Link>
      ) : (
        <div className="opacity-50">Next »</div>
      )}
    </div>
  );
};

export default Pagination;
