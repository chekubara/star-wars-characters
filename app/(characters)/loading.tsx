import PageTitleSkeleton from "@/app/components/skeleton/PageTitleSkeleton";
import CharacterCardsSkeleton from "@/app/components/skeleton/CharacterCardsSkeleton";

const Loading = () => {
  return (
    <>
      <PageTitleSkeleton />
      <CharacterCardsSkeleton />
    </>
  );
};

export default Loading;
