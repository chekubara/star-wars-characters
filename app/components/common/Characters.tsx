"use client";

import React from "react";
import { useCharacters } from "@/app/hooks/useCharacters";
import Pagination from "./Pagination";
import CharacterCard from "./CharacterCard";
import { getCharacterId } from "@/types/Character";

interface Props {
  page: number;
}

const Characters = ({ page }: Props) => {
  const { data } = useCharacters(page);
  return (
    <>
      <ul className="flex flex-wrap">
        {data?.results.map((character) => (
          <li
            key={character.url}
            className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4"
          >
            <CharacterCard
              name={character.name}
              id={getCharacterId(character.url)}
            />
          </li>
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

export default Characters;
