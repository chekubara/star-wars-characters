"use client";
import dynamic from "next/dynamic";
import { slugify } from "@/service/slugify";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const FavoriteCharacterButton = dynamic(
  () => import("./FavoriteCharacterButton"),
  { ssr: false }
);

interface Props {
  name: string;
  id: number;
}

const CharacterCard = ({ name, id }: Props) => {
  return (
    <Link
      href={`/character/${slugify(name)}/${id}`}
      className="rounded-2xl relative w-full block border-4 border-background hover:border-primary transition-all overflow-hidden"
      aria-label={`View ${name} details`}
    >
      <Image
        src="/character_card.jpg"
        alt={`${name} card`}
        width={400}
        height={300}
        priority
      />
      <div className="absolute top-0 left-0 w-full bg-background p-4 text-xl text-secondary font-bold bg-opacity-50">
        {name}
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-background text-xl text-secondary font-bold bg-opacity-50 ">
        <FavoriteCharacterButton id={id} name={name} />
      </div>
    </Link>
  );
};

export default CharacterCard;
