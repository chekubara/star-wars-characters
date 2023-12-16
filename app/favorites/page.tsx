import dynamic from "next/dynamic";
import PageTitle from "@/app/components/common/PageTitle";

const FavoriteCharacters = dynamic(
  () => import("@/app/components/common/FavoriteCharacters"),
  {
    ssr: false,
  }
);

const FavoritesPage = async () => {
  return (
    <>
      <PageTitle>My Favorite Star Wars Characters</PageTitle>
      <FavoriteCharacters />
    </>
  );
};

export default FavoritesPage;
