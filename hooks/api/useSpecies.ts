import { QueryClient } from "@tanstack/react-query";
import { prefetchApi, useApi } from "./useApi";
import { Species } from "@/types/Species";
import { Endpoint } from "@/types/Endpoint";

const endpoint: Endpoint = "species";

const prefetchSpecies = async (queryClient: QueryClient, id: number) => {
  return prefetchApi<Species>(queryClient, endpoint, id);
};

const useSpecies = (id: number) => {
  return useApi<Species>(endpoint, id);
};

export { useSpecies, prefetchSpecies };
