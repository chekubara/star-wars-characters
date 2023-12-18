import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_URL } from "./const";
import { Endpoint } from "@/types/Endpoint";

const getQueryKey = (endpoint: Endpoint, id: number) => [endpoint, { id }];

const fetchApi = async <T>(endpoint: Endpoint, id: number): Promise<T> => {
  const res = await fetch(`${API_URL}/${endpoint}/${id}/`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

const prefetchApi = async <T>(
  queryClient: QueryClient,
  endpoint: Endpoint,
  id: number
): Promise<T | undefined> => {
  await queryClient.prefetchQuery({
    queryKey: getQueryKey(endpoint, id),
    queryFn: () => fetchApi(endpoint, id),
  });

  return queryClient.getQueryData<T>(getQueryKey(endpoint, id));
};

const useApi = <T>(endpoint: Endpoint, id: number) => {
  return useQuery({
    queryKey: getQueryKey(endpoint, id),
    queryFn: () => fetchApi<T>(endpoint, id),
  });
};

export { useApi, fetchApi, prefetchApi };
