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
      className={
        isFavorite
          ? "flex space-x-2 items-center p-2 border-2 border-secondary rounded-xl"
          : "flex space-x-2 items-center p-2 border-2 border-primary rounded-xl"
      }
      onClick={clickHandler}
      aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    >
      <FavIcon
        className={
          isFavorite ? "h-4 w-4 text-secondary" : "h-4 w-4 text-primary"
        }
      />
      <span
        className={
          isFavorite
            ? "text-sm font-normal text-secondary"
            : "text-sm font-normal text-primary"
        }
      >
        {isFavorite ? "Remove" : "Add"}
      </span>
    </button>
  );
};

export default FavoriteCharacterButton;
