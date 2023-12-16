import React from "react";
import { usePlanet } from "@/app/hooks/usePlanet";

interface Props {
  id: number;
}

const PlanetCard = ({ id }: Props) => {
  const { data, isLoading } = usePlanet(id);

  return <div>{data?.name}</div>;
};

export default PlanetCard;
