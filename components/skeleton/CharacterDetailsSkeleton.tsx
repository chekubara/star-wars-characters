import React from "react";
import Spinner from "@/components/common/Spinner";

const CharacterDetailsSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col p-4 border-4 border-background rounded-xl bg-gradient-to-br from-background-secondary from-20% to-background">
          <h2 className="text-xl font-bold text-secondary">Appearance</h2>
          <div className="flex flex-row justify-center p-4">
            <Spinner variant="primary" size="sm" />
          </div>
        </div>

        <div className="flex flex-col p-4 border-4 border-background rounded-md bg-gradient-to-bl from-background-secondary from-20% to-background">
          <h2 className="text-xl font-bold text-secondary">Bio</h2>
          <div className="flex flex-row justify-center p-4">
            <Spinner variant="primary" size="sm" />
          </div>
        </div>

        <div className="flex flex-col p-4 border-4 border-background rounded-md bg-gradient-to-tr from-background-secondary from-20% to-background">
          <h2 className="text-xl font-bold text-secondary">Abilities</h2>
          <div className="flex flex-row justify-center p-4">
            <Spinner variant="primary" size="sm" />
          </div>
        </div>
        <div className="flex flex-col p-4 border-4 border-background rounded-md bg-gradient-to-tl from-background-secondary from-20% to-background">
          <h2 className="text-xl font-bold text-secondary">Films</h2>
          <div className="flex flex-row justify-center p-4">
            <Spinner variant="primary" size="sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetailsSkeleton;
