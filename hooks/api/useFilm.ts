import { QueryClient } from "@tanstack/react-query";
import { prefetchApi, useApi } from "./useApi";
import { Film } from "@/types/Film";
import { Endpoint } from "@/types/Endpoint";

const endpoint: Endpoint = "films";

const prefetchFilm = async (queryClient: QueryClient, id: number) => {
  return prefetchApi<Film>(queryClient, endpoint, id);
};

const useFilm = (id: number) => {
  return useApi<Film>(endpoint, id);
};

export { useFilm, prefetchFilm };
