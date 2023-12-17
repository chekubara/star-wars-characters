import { QueryClient, useQuery } from "@tanstack/react-query";
import { Film } from "@/types/Film";
import { API_URL } from "./const";

const getQueryKey = (id: number) => ["film", { id }];

const fetchFilm = async (id: number): Promise<Film> => {
  const res = await fetch(`${API_URL}/films/${id}/`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

const prefetchFilm = async (
  queryClient: QueryClient,
  id: number
): Promise<Film | undefined> => {
  await queryClient.prefetchQuery({
    queryKey: getQueryKey(id),
    queryFn: () => fetchFilm(id),
  });

  return queryClient.getQueryData<Film>(getQueryKey(id));
};

const useFilm = (id: number) => {
  return useQuery({
    queryKey: getQueryKey(id),
    queryFn: () => fetchFilm(id),
  });
};

export { useFilm, fetchFilm, prefetchFilm };
