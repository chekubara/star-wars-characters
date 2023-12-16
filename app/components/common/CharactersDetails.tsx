"use client";

import { useCharacter } from "@/app/hooks/useCharacter";
import { usePlanet } from "@/app/hooks/usePlanet";
import { getPlanetId } from "@/types/Planet";
import { notFound } from "next/navigation";
import PlanetCard from "./PlanetCard";
import SpeciesCard from "./SpeciesCard";

interface Props {
  id: number;
}

const CharacterDetails = ({ id }: Props) => {
  const { data: character, isLoading } = useCharacter(id);
  if (!character) return notFound();
  const { data: planet } = usePlanet(getPlanetId(character!.homeworld));

  return (
    <>
      <div>Homeworld: </div>
      <PlanetCard id={getPlanetId(character.homeworld)} />

      <div>Species: </div>
      {character.species.map((s) => (
        <SpeciesCard key={s} id={getPlanetId(s)} />
      ))}
    </>
  );
};

export default CharacterDetails;
