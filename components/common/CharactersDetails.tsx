"use client";

import { notFound } from "next/navigation";
import { useCharacter } from "@/hooks/useCharacter";
import PlanetCard from "./PlanetCard";
import SpeciesCard from "./SpeciesCard";
import AttributeRow from "./AttributeRow";
import { getModelId } from "@/service/getModelId";
import VehicleCard from "./VehicleCard";
import StarshipCard from "./StarshipCard";
import FilmCard from "./FilmCard";

interface Props {
  id: number;
}

const CharacterDetails = ({ id }: Props) => {
  const { data: character } = useCharacter(id);
  if (!character) return notFound();

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col p-4 border-4 border-background rounded-xl bg-gradient-to-br from-background-secondary from-20% to-background">
        <h2 className="text-xl font-bold text-secondary">Appearance</h2>
        <AttributeRow name="Gender">{character.gender}</AttributeRow>
        <AttributeRow name="Eye Color">{character.eye_color}</AttributeRow>
        <AttributeRow name="Hair Color">{character.hair_color}</AttributeRow>
        <AttributeRow name="Height">{character.height}cm</AttributeRow>
        <AttributeRow name="Mass">{character.mass}kg</AttributeRow>
        <AttributeRow name="Skin Color">{character.skin_color}</AttributeRow>
      </div>

      <div className="flex flex-col p-4 border-4 border-background rounded-md bg-gradient-to-bl from-background-secondary from-20% to-background">
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
      </div>

      <div className="flex flex-col p-4 border-4 border-background rounded-md bg-gradient-to-tr from-background-secondary from-20% to-background">
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
      </div>
      <div className="flex flex-col p-4 border-4 border-background rounded-md bg-gradient-to-tl from-background-secondary from-20% to-background">
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
      </div>
    </article>
  );
};

export default CharacterDetails;
