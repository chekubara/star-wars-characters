import React from "react";
import { useSpecies } from "@/hooks/api/useSpecies";
import Spinner from "./Spinner";

interface Props {
  id: number;
}

const SpeciesCard = ({ id }: Props) => {
  const { data, isLoading } = useSpecies(id);

  if (isLoading) return <Spinner size="sm" />;

  return <div>{data?.name}</div>;
};

export default SpeciesCard;
