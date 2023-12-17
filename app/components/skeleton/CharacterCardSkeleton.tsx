import React from "react";
import Image from "next/image";
import Spinner from "../common/Spinner";

const CharacterCardSkeleton = () => {
  return (
    <div>
      <div
        className={`rounded-2xl relative w-full block border-4 border-background overflow-hidden`}
      >
        <div className="absolute top-0 left-0 w-full bg-background p-4 text-xl text-secondary font-bold bg-opacity-50">
          <Spinner variant="secondary" size="sm" />
        </div>
        <Image
          src="/character_card.jpg"
          alt={`Placeholder card`}
          width={400}
          height={300}
          priority
        />
      </div>
    </div>
  );
};

export default CharacterCardSkeleton;
