import { create } from "zustand";
import { persist } from "zustand/middleware";

type Favorite = {
  id: number;
  name: string;
};

interface FavoritesState {
  favorites: Favorite[];
  add: (id: number, name: string) => void;
  remove: (id: number) => void;
}

const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      add: (id: number, name: string) =>
        set((state) => ({ favorites: [...state.favorites, { id, name }] })),
      remove: (id: number) =>
        set((state) => ({
          favorites: [...state.favorites.filter((fav) => fav.id !== id)],
        })),
    }),
    {
      name: "starwars-favorites",
    }
  )
);

export default useFavoritesStore;