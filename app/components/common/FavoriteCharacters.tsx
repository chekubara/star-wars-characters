"use client";

import React from "react";
import useFavoritesStore from "@/app/hooks/useFavoritesStore";
import CharacterCard from "./CharacterCard";

const FavoriteCharacters = () => {
  const { favorites } = useFavoritesStore();
  if (favorites.length === 0) {
    return <p className="text-center">No favorites yet.</p>;
  }

  return (
    <ul className="flex flex-wrap">
      {favorites.map((character) => (
        <li
          key={character.id}
          className="w-full xs:w-1/2 md:w-1/3 xl:w-1/5 pr-4 pb-4"
        >
          <CharacterCard name={character.name} id={character.id} />
        </li>
      ))}
    </ul>
  );
};

export default FavoriteCharacters;
