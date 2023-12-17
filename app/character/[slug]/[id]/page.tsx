import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import HydrationBoundaryProvider from "@/app/components/providers/HydrationBoundryProvider";
import PageTitle from "@/app/components/common/PageTitle";
import CharacterDetails from "@/app/components/common/CharactersDetails";
import { prefetchCharacter, fetchCharacter } from "@/app/hooks/useCharacter";
import { prefetchSpecies } from "@/app/hooks/useSpecies";
import { prefetchPlanet } from "@/app/hooks/usePlanet";
import { getModelId } from "@/service/getModelId";
import { slugify } from "@/service/slugify";
import queryClient from "@/service/queryClient";
import { prefetchStarship } from "@/app/hooks/useStarship";
import { prefetchVehicle } from "@/app/hooks/useVehicle";
import { prefetchFilm } from "@/app/hooks/useFilm";
import Spinner from "@/app/components/common/Spinner";

const FavoriteCharacterButton = dynamic(
  () => import("@/app/components/common/FavoriteCharacterButton"),
  {
    ssr: false,
  }
);

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const id = parseInt(params.id);
  const slug = params.slug;
  if (isNaN(id)) notFound();

  const character = await fetchCharacter(id);
  if (!character || slugify(character.name) !== slug) notFound();

  return {
    title: `${character.name} | Star Wars Characters`,
  };
}

const CharacterPage = async ({ params }: Props) => {
  const id = parseInt(params.id);
  const character = await prefetchCharacter(queryClient, id);
  if (character) {
    await Promise.all([
      prefetchPlanet(queryClient, getModelId(character.homeworld)),
      ...character.films.map((s) => prefetchFilm(queryClient, getModelId(s))),
      ...character.species.map((s) =>
        prefetchSpecies(queryClient, getModelId(s))
      ),
      ...character.starships.map((s) =>
        prefetchStarship(queryClient, getModelId(s))
      ),
      ...character.vehicles.map((s) =>
        prefetchVehicle(queryClient, getModelId(s))
      ),
    ]);
  }

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <PageTitle>{character?.name}</PageTitle>
        {character && (
          <FavoriteCharacterButton id={id} name={character?.name} />
        )}
      </div>
      <HydrationBoundaryProvider queryClient={queryClient}>
        <CharacterDetails id={id} />
      </HydrationBoundaryProvider>
    </>
  );
};

export default CharacterPage;
