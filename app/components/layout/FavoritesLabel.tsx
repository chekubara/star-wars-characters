"use client";

import useFavoritesStore from "@/app/hooks/useFavoritesStore";

const FavoritesLabel = () => {
  const { favorites } = useFavoritesStore();
  const count = favorites.length;

  return (
    <>
      My Favorites
      <span className="rounded-full text-xs p-1 bg-background-secondary text-primary ml-2">
        {count}
      </span>
    </>
  );
};
export default FavoritesLabel;
