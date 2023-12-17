import { QueryClient, useQuery } from "@tanstack/react-query";
import { Vehicle } from "@/types/Vehicle";
import { API_URL } from "./const";

const getQueryKey = (id: number) => ["vehicle", { id }];

const fetchVehicle = async (id: number): Promise<Vehicle> => {
  const res = await fetch(`${API_URL}/vehicles/${id}/`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

const prefetchVehicle = async (
  queryClient: QueryClient,
  id: number
): Promise<Vehicle | undefined> => {
  await queryClient.prefetchQuery({
    queryKey: getQueryKey(id),
    queryFn: () => fetchVehicle(id),
  });

  return queryClient.getQueryData<Vehicle>(getQueryKey(id));
};

const useVehicle = (id: number) => {
  return useQuery({
    queryKey: getQueryKey(id),
    queryFn: () => fetchVehicle(id),
  });
};

export { useVehicle, fetchVehicle, prefetchVehicle };
