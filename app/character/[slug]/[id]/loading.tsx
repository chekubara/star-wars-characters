import PageTitleSkeleton from "@/app/components/skeleton/PageTitleSkeleton";
import CharacterDetailsSkeleton from "@/app/components/skeleton/CharacterDetailsSkeleton";

const Loading = () => {
  return (
    <>
      <PageTitleSkeleton />
      <CharacterDetailsSkeleton />
    </>
  );
};

export default Loading;
