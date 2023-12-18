import React from "react";
import { usePlanet } from "@/hooks/usePlanet";
import Spinner from "./Spinner";

interface Props {
  id: number;
}

const PlanetCard = ({ id }: Props) => {
  const { data, isLoading } = usePlanet(id);

  if (isLoading) return <Spinner size="sm" />;

  return <div>{data?.name}</div>;
};

export default PlanetCard;
