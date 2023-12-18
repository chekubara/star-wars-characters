"use client";

import useFavoritesStore from "@/hooks/useFavoritesStore";
import FavIcon from "@/components/icons/FavIcon";

interface Props {
  id: number;
  name: string;
}

const FavoriteCharacterButton = ({ id, name }: Props) => {
  const { add, remove, favorites } = useFavoritesStore();

  const isFavorite = favorites.find((fav) => fav.id === id);
  const favColor = isFavorite ? "secondary" : "primary";

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite) {
      remove(id);
    } else {
      add(id, name);
    }
  };

  return (
    <button
      type="button"
      className={`flex space-x-2 items-center p-2 rounded-xl border-2 border-${favColor}`}
      onClick={clickHandler}
      aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    >
      <FavIcon className={`h-4 w-4 text-${favColor}`} />
      <span className={`text-sm font-normal text-${favColor}`}>
        {isFavorite ? "Remove" : "Add"}
      </span>
    </button>
  );
};

export default FavoriteCharacterButton;
