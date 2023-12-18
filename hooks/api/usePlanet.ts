import { QueryClient } from "@tanstack/react-query";
import { prefetchApi, useApi } from "./useApi";
import { Planet } from "@/types/Planet";
import { Endpoint } from "@/types/Endpoint";

const endpoint: Endpoint = "planets";

const prefetchPlanet = async (queryClient: QueryClient, id: number) => {
  return prefetchApi<Planet>(queryClient, endpoint, id);
};

const usePlanet = (id: number) => {
  return useApi<Planet>(endpoint, id);
};

export { usePlanet, prefetchPlanet };
