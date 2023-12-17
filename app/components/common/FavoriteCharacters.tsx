"use client";

import React from "react";
import useFavoritesStore from "@/app/hooks/useFavoritesStore";
import CharacterCard from "./CharacterCard";
import { List, ListItem } from "./List";

const FavoriteCharacters = () => {
  const { favorites } = useFavoritesStore();
  if (favorites.length === 0) {
    return <p className="text-center">No favorites yet.</p>;
  }

  return (
    <List>
      {favorites.map((character) => (
        <ListItem>
          <CharacterCard name={character.name} id={character.id} />
        </ListItem>
      ))}
    </List>
  );
};

export default FavoriteCharacters;
