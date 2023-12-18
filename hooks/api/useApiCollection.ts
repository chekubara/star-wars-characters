import { QueryClient, useQuery } from "@tanstack/react-query";
import { PaginationResponse } from "@/types/PaginationResponse";
import { Endpoint } from "@/types/Endpoint";
import { API_URL } from "./const";

const getQueryKey = (endpoint: Endpoint, page: number) => [endpoint, { page }];

export const fetchApiCollection = async <T>(
  endpoint: Endpoint,
  page: number = 1
): Promise<PaginationResponse<T>> => {
  const res = await fetch(`${API_URL}/${endpoint}/?page=${page}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

const prefetchApiCollection = async (
  queryClient: QueryClient,
  endpoint: Endpoint,
  page: number = 1
): Promise<void> => {
  await queryClient.prefetchQuery({
    queryKey: getQueryKey(endpoint, page),
    queryFn: () => fetchApiCollection(endpoint, page),
  });
};

const useApiCollection = <T>(endpoint: Endpoint, page: number = 1) => {
  return useQuery<PaginationResponse<T>>({
    queryKey: getQueryKey(endpoint, page),
    queryFn: () => fetchApiCollection<T>(endpoint, page),
  });
};

export { useApiCollection, prefetchApiCollection };
