import React from "react";
import AttributeRow from "./AttributeRow";
import VehicleCard from "./VehicleCard";
import StarshipCard from "./StarshipCard";
import { Character } from "@/types/Character";
import { getModelId } from "@/service/getModelId";

interface Props {
  character: Character;
}

const CharacterDetailsBio = ({ character }: Props) => {
  return (
    <>
      <h2 className="text-xl font-bold text-secondary">Abilities</h2>
      <AttributeRow name="Vehicles">
        {character.vehicles.length === 0 && "n/a"}
        {character.vehicles.map((v) => (
          <VehicleCard key={v} id={getModelId(v)} />
        ))}
      </AttributeRow>
      <AttributeRow name="Starships">
        {character.starships.length === 0 && "n/a"}
        {character.starships.map((s) => (
          <StarshipCard key={s} id={getModelId(s)} />
        ))}
      </AttributeRow>
    </>
  );
};

export default CharacterDetailsBio;
