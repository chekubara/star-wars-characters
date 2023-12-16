import PageTitle from "./components/common/PageTitle";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchCharacters } from "@/app/hooks/useCharacters";
import Characters from "./components/common/Characters";

const Home = async () => {
  const defaultPage = 1;
  const queryClient = await prefetchCharacters(defaultPage);

  return (
    <>
      <PageTitle>Welcome to StarWars Characters</PageTitle>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Characters page={defaultPage} />
      </HydrationBoundary>
    </>
  );
};

export default Home;
