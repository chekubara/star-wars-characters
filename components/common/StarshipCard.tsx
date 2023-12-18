import React from "react";
import { useStarship } from "@/hooks/useStarship";
import Spinner from "./Spinner";

interface Props {
  id: number;
}

const StarshipCard = ({ id }: Props) => {
  const { data, isLoading } = useStarship(id);

  if (isLoading) return <Spinner size="sm" />;

  return <div>{data?.name}</div>;
};

export default StarshipCard;
