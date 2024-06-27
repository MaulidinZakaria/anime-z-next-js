import AnimeList from "@/components/AnimeList/index";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {

  let { keyword } = params
  keyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse(`anime`, `q=${keyword}`);

  return (
    <>
      {/* {Anime Pencarian} */}
      <section>
        <Header
          title={`Pencarian untuk ${keyword}`}
        ></Header>
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
