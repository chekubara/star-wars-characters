import HydrationBoundaryProvider from "@/app/components/providers/HydrationBoundryProvider";
import { prefetchCharacters } from "@/app/hooks/useCharacters";
import PageTitle from "@/app/components/common/PageTitle";
import Characters from "@/app/components/common/Characters";
import queryClient from "@/service/queryClient";

const Home = async () => {
  const defaultPage = 1;
  await prefetchCharacters(queryClient, defaultPage);

  return (
    <>
      <PageTitle>Welcome to StarWars Characters</PageTitle>
      <HydrationBoundaryProvider queryClient={queryClient}>
        <Characters page={defaultPage} />
      </HydrationBoundaryProvider>
    </>
  );
};

export default Home;
