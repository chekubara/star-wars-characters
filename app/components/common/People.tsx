"use client";

import React from "react";
import { usePeople } from "@/app/hooks/usePeople";
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
        firstPageUrl="/"
      />
    </>
  );
};

export default People;
