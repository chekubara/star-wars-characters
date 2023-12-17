import React from "react";
import { useFilm } from "@/app/hooks/useFilm";
import Spinner from "./Spinner";

interface Props {
  id: number;
}

const FilmCard = ({ id }: Props) => {
  const { data, isLoading } = useFilm(id);

  if (isLoading) return <Spinner size="sm" />;

  return (
    <div>
      {data?.title} ({data?.release_date.split("-")[0]})
    </div>
  );
};

export default FilmCard;
