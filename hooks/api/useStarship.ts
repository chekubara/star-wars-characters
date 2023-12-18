import { QueryClient } from "@tanstack/react-query";
import { prefetchApi, useApi } from "./useApi";
import { Starship } from "@/types/Starship";
import { Endpoint } from "@/types/Endpoint";

const endpoint: Endpoint = "starships";

const prefetchStarship = async (queryClient: QueryClient, id: number) => {
  return prefetchApi<Starship>(queryClient, endpoint, id);
};

const useStarship = (id: number) => {
  return useApi<Starship>(endpoint, id);
};

export { useStarship, prefetchStarship };
