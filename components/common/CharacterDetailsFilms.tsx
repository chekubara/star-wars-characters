import React from "react";
import FilmCard from "./FilmCard";
import { Character } from "@/types/Character";
import { getModelId } from "@/service/getModelId";

interface Props {
  character: Character;
}

const CharacterDetailsBio = ({ character }: Props) => {
  return (
    <>
      <h2 className="text-xl font-bold text-secondary">Films</h2>
      {character.films.length === 0 && "n/a"}
      {character.films.length > 0 && (
        <ul>
          {character.films.map((f) => (
            <li className="list-disc ml-5" key={f}>
              <FilmCard id={getModelId(f)} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CharacterDetailsBio;
