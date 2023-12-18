"use client";

import React from "react";
import { useCharacters } from "@/hooks/useCharacters";
import Pagination from "./Pagination";
import CharacterCard from "./CharacterCard";
import { List, ListItem } from "./List";
import { getModelId } from "@/service/getModelId";

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
              id={getModelId(character.url)}
            />
          </ListItem>
        ))}
      </List>
      <Pagination
        page={page}
        isPrev={data?.previous !== null}
        isNext={data?.next !== null}
        url="/characters"
        firstPageUrl="/"
      />
    </>
  );
};

export default Characters;
