"use client";

import React from "react";
import { usePeople } from "@/app/hooks/usePeople";
import Link from "next/link";
import Pagination from "./Pagination";

interface Props {
  page: number;
}

const People = ({ page }: Props) => {
  const { data } = usePeople(page);
  return (
    <>
      <ul>
        {data?.results.map((person) => (
          <li key={person.url}>{person.name}</li>
        ))}
      </ul>
      <Pagination
        page={page}
        isPrev={data?.previous !== null}
        isNext={data?.next !== null}
        url="/page"
      />
    </>
  );
};

export default People;
