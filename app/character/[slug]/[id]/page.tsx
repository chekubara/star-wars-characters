import { notFound } from "next/navigation";
import { QueryClient } from "@tanstack/react-query";
import { prefetchCharacter, fetchCharacter } from "@/app/hooks/useCharacter";
import { prefetchPlanet } from "@/app/hooks/usePlanet";
import HydrationBoundaryProvider from "@/app/components/providers/HydrationBoundryProvider";
import PageTitle from "@/app/components/common/PageTitle";
import CharacterDetails from "@/app/components/common/CharactersDetails";
import { getPlanetId } from "@/types/Planet";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const id = parseInt(params.id);
  if (isNaN(id)) notFound();

  const character = await fetchCharacter(id);
  if (!character) notFound();

  return {
    title: `${character.name} | Star Wars Characters`,
  };
}

const CharacterPage = async ({ params }: Props) => {
  const id = parseInt(params.id);
  const queryClient = new QueryClient();
  const character = await prefetchCharacter(queryClient, id);
  if (character)
    await prefetchPlanet(queryClient, getPlanetId(character.homeworld));

  return (
    <>
      <PageTitle>StarWars Character</PageTitle>
      <HydrationBoundaryProvider queryClient={queryClient}>
        <CharacterDetails id={id} />
      </HydrationBoundaryProvider>
    </>
  );
};

export default CharacterPage;
