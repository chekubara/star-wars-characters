"use client";

import { useCharacter } from "@/app/hooks/useCharacter";
import { usePlanet } from "@/app/hooks/usePlanet";
import { getPlanetId } from "@/types/Planet";
import { getSpeciesId } from "@/types/Species";
import { notFound } from "next/navigation";
import PlanetCard from "./PlanetCard";
import SpeciesCard from "./SpeciesCard";
import AttributeRow from "./AttributeRow";

interface Props {
  id: number;
}

const CharacterDetails = ({ id }: Props) => {
  const { data: character, isLoading } = useCharacter(id);
  if (!character) return notFound();
  const { data: planet } = usePlanet(getPlanetId(character!.homeworld));

  return (
    <div className="flex flex-col p-4 border-2 border-secondary rounded-md bg-background">
      <AttributeRow name="Birth Year">{character.birth_year}</AttributeRow>
      <AttributeRow name="Eye Color">{character.eye_color}</AttributeRow>
      <AttributeRow name="Gender">{character.gender}</AttributeRow>
      <AttributeRow name="Hair Color">{character.hair_color}</AttributeRow>
      <AttributeRow name="Height">{character.height}cm</AttributeRow>
      <AttributeRow name="Mass">{character.mass}kg</AttributeRow>
      <AttributeRow name="Skin Color">{character.skin_color}</AttributeRow>
      <AttributeRow name="Homeworld">
        <PlanetCard id={getPlanetId(character.homeworld)} />
      </AttributeRow>
      <AttributeRow name="Species">
        {character.species.map((s) => (
          <SpeciesCard key={s} id={getSpeciesId(s)} />
        ))}
      </AttributeRow>
    </div>
  );
};

export default CharacterDetails;
