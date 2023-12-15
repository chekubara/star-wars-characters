import { notFound } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchPeople } from "@/app/hooks/usePeople";
import PageTitle from "@/app/components/common/PageTitle";
import People from "@/app/components/common/People";

interface Props {
  params: {
    page: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const page = parseInt(params.page);

  if (isNaN(page) || page < 1) {
    notFound();
  }

  return {
    title: `Star Wars Characters | Page ${page}`,
  };
}

const PeoplePage = async ({ params }: Props) => {
  const page = parseInt(params.page);
  const queryClient = await prefetchPeople(page);

  return (
    <>
      <PageTitle>StarWars Characters Page {page}</PageTitle>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <People page={page} />
      </HydrationBoundary>
    </>
  );
};

export default PeoplePage;
