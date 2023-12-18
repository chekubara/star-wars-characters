"use client";

import { notFound } from "next/navigation";
import { useCharacter } from "@/hooks/api/useCharacter";
import CharacterDetailsAppearance from "./CharacterDetailsAppearance";
import CharacterDetailsBio from "./CharacterDetailsBio";
import CharacterDetailsAbilities from "./CharacterDetailsAbilities";
import CharacterDetailsFilms from "./CharacterDetailsFilms";

interface Props {
  id: number;
}

const CharacterDetails = ({ id }: Props) => {
  const { data: character } = useCharacter(id);
  if (!character) return notFound();

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col p-4 border-4 border-background rounded-xl bg-gradient-to-br from-background-secondary from-20% to-background">
        <CharacterDetailsAppearance character={character} />
      </div>

      <div className="flex flex-col p-4 border-4 border-background rounded-md bg-gradient-to-bl from-background-secondary from-20% to-background">
        <CharacterDetailsBio character={character} />
      </div>

      <div className="flex flex-col p-4 border-4 border-background rounded-md bg-gradient-to-tr from-background-secondary from-20% to-background">
        <CharacterDetailsAbilities character={character} />
      </div>
      <div className="flex flex-col p-4 border-4 border-background rounded-md bg-gradient-to-tl from-background-secondary from-20% to-background">
        <CharacterDetailsFilms character={character} />
      </div>
    </article>
  );
};

export default CharacterDetails;
