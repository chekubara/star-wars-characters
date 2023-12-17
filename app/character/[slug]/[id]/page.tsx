import { notFound } from "next/navigation";
import HydrationBoundaryProvider from "@/app/components/providers/HydrationBoundryProvider";
import PageTitle from "@/app/components/common/PageTitle";
import CharacterDetails from "@/app/components/common/CharactersDetails";
import { prefetchCharacter, fetchCharacter } from "@/app/hooks/useCharacter";
import { prefetchSpecies } from "@/app/hooks/useSpecies";
import { prefetchPlanet } from "@/app/hooks/usePlanet";
import { getPlanetId } from "@/types/Planet";
import { getSpeciesId } from "@/types/Species";
import { slugify } from "@/service/slugify";
import queryClient from "@/service/queryClient";

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
      prefetchPlanet(queryClient, getPlanetId(character.homeworld)),
      ...character.species.map((s) =>
        prefetchSpecies(queryClient, getSpeciesId(s))
      ),
    ]);
  }

  return (
    <>
      <PageTitle>{character?.name}</PageTitle>
      <HydrationBoundaryProvider queryClient={queryClient}>
        <CharacterDetails id={id} />
      </HydrationBoundaryProvider>
    </>
  );
};

export default CharacterPage;
