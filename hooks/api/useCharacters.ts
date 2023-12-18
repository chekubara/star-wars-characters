import { QueryClient } from "@tanstack/react-query";
import { prefetchApiCollection, useApiCollection } from "./useApiCollection";
import { Character } from "@/types/Character";
import { Endpoint } from "@/types/Endpoint";

const endpoint: Endpoint = "people";

const prefetchCharacters = async (
  queryClient: QueryClient,
  page: number = 1
) => {
  return prefetchApiCollection(queryClient, endpoint, page);
};

const useCharacters = (page: number = 1) => {
  return useApiCollection<Character>(endpoint, page);
};

export { useCharacters, prefetchCharacters };
