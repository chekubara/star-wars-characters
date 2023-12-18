import React from "react";
import { Character } from "@/types/Character";
import AttributeRow from "./AttributeRow";

interface Props {
  character: Character;
}

const CharacterDetailsAppearance = ({ character }: Props) => {
  return (
    <>
      <h2 className="text-xl font-bold text-secondary">Appearance</h2>
      <AttributeRow name="Gender">{character.gender}</AttributeRow>
      <AttributeRow name="Eye Color">{character.eye_color}</AttributeRow>
      <AttributeRow name="Hair Color">{character.hair_color}</AttributeRow>
      <AttributeRow name="Height">{character.height}cm</AttributeRow>
      <AttributeRow name="Mass">{character.mass}kg</AttributeRow>
      <AttributeRow name="Skin Color">{character.skin_color}</AttributeRow>
    </>
  );
};

export default CharacterDetailsAppearance;
