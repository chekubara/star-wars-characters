import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import HydrationBoundaryProvider from "@/components/providers/HydrationBoundryProvider";
import PageTitle from "@/components/common/PageTitle";
import CharacterDetails from "@/components/common/CharacterDetails";
import { prefetchCharacter, fetchCharacter } from "@/hooks/api/useCharacter";
import { getModelId } from "@/service/getModelId";
import { prefetchSpecies } from "@/hooks/api/useSpecies";
import { prefetchPlanet } from "@/hooks/api/usePlanet";
import { prefetchStarship } from "@/hooks/api/useStarship";
import { prefetchVehicle } from "@/hooks/api/useVehicle";
import { prefetchFilm } from "@/hooks/api/useFilm";
import { slugify } from "@/service/slugify";
import queryClient from "@/service/queryClient";

const FavoriteCharacterButton = dynamic(
  () => import("@/components/common/FavoriteCharacterButton"),
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
