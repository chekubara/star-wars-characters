import { notFound } from "next/navigation";
import HydrationBoundaryProvider from "@/app/components/providers/HydrationBoundryProvider";
import { prefetchCharacters } from "@/app/hooks/useCharacters";
import PageTitle from "@/app/components/common/PageTitle";
import Characters from "@/app/components/common/Characters";
import queryClient from "@/service/queryClient";

interface Props {
  params: {
    page: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const page = parseInt(params.page);

  if (isNaN(page) || page < 1) notFound();

  return {
    title: `Page ${page} | Star Wars Characters`,
  };
}

const CharactersPage = async ({ params }: Props) => {
  const page = parseInt(params.page);
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
