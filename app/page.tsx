import PageTitle from "./components/common/PageTitle";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchPeople } from "@/app/hooks/usePeople";
import People from "./components/common/People";

const Home = async () => {
  const defaultPage = 1;
  const queryClient = await prefetchPeople(defaultPage);

  return (
    <>
      <PageTitle>StarWars Characters Page</PageTitle>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <People page={defaultPage} />
      </HydrationBoundary>
    </>
  );
};

export default Home;
