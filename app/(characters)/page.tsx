import { prefetchCharacters } from "@/hooks/useCharacters";
import HydrationBoundaryProvider from "@/components/providers/HydrationBoundryProvider";
import PageTitle from "@/components/common/PageTitle";
import Characters from "@/components/common/Characters";
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
