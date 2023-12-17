"use client";

import React from "react";
import dynamic from "next/dynamic";
import { slugify } from "@/service/slugify";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import useFavoritesStore from "@/app/hooks/useFavoritesStore";

const FavoriteCharacterButton = dynamic(
  () => import("./FavoriteCharacterButton"),
  {
    ssr: false,
    loading: () => (
      <div className="p-2">
        <Spinner variant="primary" size="sm" />
      </div>
    ),
  }
);

interface Props {
  name: string;
  id: number;
}

const CharacterCard = ({ name, id }: Props) => {
  const [hovered, setHovered] = React.useState(false);
  const { favorites } = useFavoritesStore();
  const isFavorite = favorites.find((fav) => fav.id === id);
  const ImageComponent = (
    <Image
      src="/character_card.jpg"
      alt={`${name} card`}
      width={400}
      height={300}
      priority
    />
  );
  const NameComponent = (
    <div className="absolute top-0 left-0 w-full bg-background p-4 text-xl text-secondary font-bold bg-opacity-50">
      {name}
    </div>
  );

  const FavoriteComponent = <FavoriteCharacterButton id={id} name={name} />;

  return (
    <>
      <div
        className={`relative ${hovered ? "z-10" : "z-0"} max-md:hidden`}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          animate={
            hovered ? { rotateY: 0, scale: 1.15 } : { rotateY: 20, scale: 1 }
          }
          transition={{
            type: "spring",
            stiffness: hovered ? 500 : 50,
            damping: 20,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          // initial={false}
        >
          <Link
            href={`/character/${slugify(name)}/${id}`}
            className={`rounded-2xl relative w-full block border-4 border-background overflow-hidden`}
            aria-label={`View ${name} details`}
          >
            {ImageComponent}
            {NameComponent}
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-background p-4 pb-6 bg-opacity-50"
              transition={{
                type: "spring",
                stiffness: hovered ? 300 : 50,
                damping: 20,
              }}
              initial={false}
              animate={{
                y: hovered ? 8 : 100,
              }}
            >
              {FavoriteComponent}
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <div className={`md:hidden`}>
        <div>
          <Link
            href={`/character/${slugify(name)}/${id}`}
            className={`rounded-2xl relative w-full block border-4 border-background overflow-hidden`}
            aria-label={`View ${name} details`}
          >
            {ImageComponent}
            {NameComponent}
            <div className="absolute bottom-0 left-0 w-full bg-background p-4 bg-opacity-50 min-h-[72px]">
              {FavoriteComponent}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
