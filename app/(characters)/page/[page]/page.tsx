import { notFound } from "next/navigation";
import { QueryClient } from "@tanstack/react-query";
import HydrationBoundaryProvider from "@/app/components/providers/HydrationBoundryProvider";
import { prefetchCharacters } from "@/app/hooks/useCharacters";
import PageTitle from "@/app/components/common/PageTitle";
import Characters from "@/app/components/common/Characters";

interface Props {
  params: {
    page: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const page = parseInt(params.page);

  if (isNaN(page) || page < 1) notFound();

  return {
    title: `Star Wars Characters | Page ${page}`,
  };
}

const CharactersPage = async ({ params }: Props) => {
  const page = parseInt(params.page);
  const queryClient = new QueryClient();
  await prefetchCharacters(queryClient, page);

  return (
    <>
      <PageTitle>StarWars Characters Page {page}</PageTitle>
      <HydrationBoundaryProvider queryClient={queryClient}>
        <Characters page={page} />
      </HydrationBoundaryProvider>
    </>
  );
};

export default CharactersPage;
