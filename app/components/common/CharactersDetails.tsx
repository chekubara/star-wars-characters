"use client";

import { useCharacter } from "@/app/hooks/useCharacter";
import { usePlanet } from "@/app/hooks/usePlanet";
import { getPlanetId } from "@/types/Planet";
import { notFound } from "next/navigation";

interface Props {
  id: number;
}

const CharacterDetails = ({ id }: Props) => {
  const { data: character } = useCharacter(id);
  if (!character) return notFound();
  const { data: planet } = usePlanet(getPlanetId(character.homeworld));
  return <span>data?.name (HomeWorld: {planet?.name})</span>;
};

export default CharacterDetails;
