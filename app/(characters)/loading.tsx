import PageTitleSkeleton from "@/components/skeleton/PageTitleSkeleton";
import CharacterCardsSkeleton from "@/components/skeleton/CharacterCardsSkeleton";

const Loading = () => {
  return (
    <>
      <PageTitleSkeleton />
      <CharacterCardsSkeleton />
    </>
  );
};

export default Loading;
