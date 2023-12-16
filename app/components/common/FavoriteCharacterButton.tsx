"use client";

import useFavoritesStore from "@/app/hooks/useFavoritesStore";

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
      className="flex space-x-2 items-center p-4"
      onClick={clickHandler}
    >
      <svg
        className={
          isFavorite ? "h-4 w-4 text-secondary" : "h-4 w-4 text-primary"
        }
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
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
