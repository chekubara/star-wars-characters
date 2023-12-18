import React from "react";
import { Character } from "@/types/Character";
import AttributeRow from "./AttributeRow";
import PlanetCard from "./PlanetCard";
import SpeciesCard from "./SpeciesCard";
import { getModelId } from "@/service/getModelId";

interface Props {
  character: Character;
}

const CharacterDetailsBio = ({ character }: Props) => {
  return (
    <>
      <h2 className="text-xl font-bold text-secondary">Bio</h2>
      <AttributeRow name="Birth Year">{character.birth_year}</AttributeRow>
      <AttributeRow name="Homeworld">
        <PlanetCard id={getModelId(character.homeworld)} />
      </AttributeRow>
      <AttributeRow name="Species">
        {character.species.length === 0 && "n/a"}
        {character.species.map((s) => (
          <SpeciesCard key={s} id={getModelId(s)} />
        ))}
      </AttributeRow>
    </>
  );
};

export default CharacterDetailsBio;
