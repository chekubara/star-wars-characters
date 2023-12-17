"use client";

import React from "react";
import { useCharacters } from "@/app/hooks/useCharacters";
import Pagination from "./Pagination";
import CharacterCard from "./CharacterCard";
import { getCharacterId } from "@/types/Character";
import { List, ListItem } from "./List";

interface Props {
  page: number;
}

const Characters = ({ page }: Props) => {
  const { data } = useCharacters(page);
  return (
    <>
      <List>
        {data?.results.map((character) => (
          <ListItem key={character.url}>
            <CharacterCard
              name={character.name}
              id={getCharacterId(character.url)}
            />
          </ListItem>
        ))}
      </List>
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
