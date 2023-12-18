import { notFound } from "next/navigation";
import { prefetchCharacters } from "@/hooks/useCharacters";
import HydrationBoundaryProvider from "@/components/providers/HydrationBoundryProvider";
import PageTitle from "@/components/common/PageTitle";
import Characters from "@/components/common/Characters";
import queryClient from "@/service/queryClient";

interface Props {
  params: {
    pageNumber: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const page = parseInt(params.pageNumber);

  if (isNaN(page) || page < 1) notFound();

  return {
    title: `Page ${page} | Star Wars Characters`,
  };
}

const CharactersPage = async ({ params }: Props) => {
  const page = parseInt(params.pageNumber);
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
