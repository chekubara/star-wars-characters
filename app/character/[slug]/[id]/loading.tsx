import PageTitleSkeleton from "@/components/skeleton/PageTitleSkeleton";
import CharacterDetailsSkeleton from "@/components/skeleton/CharacterDetailsSkeleton";

const Loading = () => {
  return (
    <>
      <PageTitleSkeleton />
      <CharacterDetailsSkeleton />
    </>
  );
};

export default Loading;
