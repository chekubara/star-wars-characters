import React from "react";
import { useVehicle } from "@/hooks/useVehicle";
import Spinner from "./Spinner";

interface Props {
  id: number;
}

const VehicleCard = ({ id }: Props) => {
  const { data, isLoading } = useVehicle(id);

  if (isLoading) return <Spinner size="sm" />;

  return <div>{data?.name}</div>;
};

export default VehicleCard;
