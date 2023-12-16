import { slugify } from "@/utils/slugify";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  id: number;
}

const CharacterCard = ({ name, id }: Props) => {
  return (
    <Link
      href={`/character/${slugify(name)}/${id}`}
      className="rounded-md bg-background p-4 shadow-md"
    >
      {name}
    </Link>
  );
};

export default CharacterCard;
