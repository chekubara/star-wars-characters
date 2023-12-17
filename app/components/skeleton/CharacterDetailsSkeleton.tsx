import React from "react";
import Spinner from "../common/Spinner";

const CharacterDetailsSkeleton = () => {
  return (
    <div className="flex max-md:flex-col max-md:space-y-4 md:flex-row md:space-x-4">
      <div className="flex flex-col p-4 border-2 border-secondary rounded-md bg-background w-full md:w-1/2">
        <h2 className="text-xl font-bold text-secondary">Appearance</h2>
        <div className="flex flex-row justify-center p-4">
          <Spinner variant="primary" size="sm" />
        </div>
      </div>
      <div className="flex flex-col p-4 border-2 border-secondary rounded-md bg-background w-full md:w-1/2">
        <h2 className="text-xl font-bold text-secondary">Bio</h2>
        <div className="flex flex-row justify-center p-4">
          <Spinner variant="primary" size="sm" />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsSkeleton;
