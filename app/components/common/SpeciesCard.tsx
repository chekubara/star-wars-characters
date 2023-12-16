import React from "react";
import { useSpecies } from "@/app/hooks/useSpecies";

interface Props {
  id: number;
}

const SpeciesCard = ({ id }: Props) => {
  const { data, isLoading } = useSpecies(id);

  return <div>{data?.name}</div>;
};

export default SpeciesCard;
