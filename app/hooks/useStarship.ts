import { QueryClient, useQuery } from "@tanstack/react-query";
import { Starship } from "@/types/Starship";
import { API_URL } from "./const";

const getQueryKey = (id: number) => ["starship", { id }];

const fetchStarship = async (id: number): Promise<Starship> => {
  const res = await fetch(`${API_URL}/starships/${id}/`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

const prefetchStarship = async (
  queryClient: QueryClient,
  id: number
): Promise<Starship | undefined> => {
  await queryClient.prefetchQuery({
    queryKey: getQueryKey(id),
    queryFn: () => fetchStarship(id),
  });

  return queryClient.getQueryData<Starship>(getQueryKey(id));
};

const useStarship = (id: number) => {
  return useQuery({
    queryKey: getQueryKey(id),
    queryFn: () => fetchStarship(id),
  });
};

export { useStarship, fetchStarship, prefetchStarship };
