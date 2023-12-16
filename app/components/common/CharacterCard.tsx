import { Person } from "@/types/Person";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  id: number;
}

const CharacterCard = ({ name, id }: Props) => {
  return (
    <Link
      href={`/person/${id}`}
      className="rounded-md bg-background p-4 shadow-md"
    >
      {name}
    </Link>
  );
};

export default CharacterCard;
