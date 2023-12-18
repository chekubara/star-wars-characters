import { QueryClient } from "@tanstack/react-query";
import { fetchApi, prefetchApi, useApi } from "./useApi";
import { Character } from "@/types/Character";
import { Endpoint } from "@/types/Endpoint";

const endpoint: Endpoint = "people";

const fetchCharacter = async (id: number) => {
  return fetchApi<Character>(endpoint, id);
};

const prefetchCharacter = async (queryClient: QueryClient, id: number) => {
  return prefetchApi<Character>(queryClient, endpoint, id);
};

const useCharacter = (id: number) => {
  return useApi<Character>(endpoint, id);
};

export { fetchCharacter, useCharacter, prefetchCharacter };
