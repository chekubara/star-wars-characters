import { QueryClient } from "@tanstack/react-query";
import { prefetchApi, useApi } from "./useApi";
import { Vehicle } from "@/types/Vehicle";
import { Endpoint } from "@/types/Endpoint";

const endpoint: Endpoint = "vehicles";

const prefetchVehicle = async (queryClient: QueryClient, id: number) => {
  return prefetchApi<Vehicle>(queryClient, endpoint, id);
};

const useVehicle = (id: number) => {
  return useApi<Vehicle>(endpoint, id);
};

export { useVehicle, prefetchVehicle };
