import AnimeList from "@/components/AnimeList/index";
import CollectionList from "@/components/CollectionList/index";
import Carrousel from "@/components/Carrousel/index";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  const top3Anime = await getAnimeResponse("top/anime", "limit=3");
  const upcomingAnime = await getAnimeResponse("seasons/upcoming", "limit=6");
  const recommendedAnime = await getAnimeResponse("seasons/now", "limit=6");
  // let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  // recommendedAnime = reproduce(recommendedAnime, 6)

  const animeTv = await getAnimeResponse("top/anime", "type=tv&limit=3");
  const animeMovie = await getAnimeResponse("top/anime", "type=movie&limit=3");
  const animeSpecial = await getAnimeResponse("top/anime", "type=special&limit=3");

  return (
    <>
      {/* {Top Anime Today} */}
      <section className="relative -top-[10vh]">
        <Carrousel api={top3Anime} />
      </section>
      <section className="relative z-[2] mb-12 -mt-[15vh] mb-">
        <Header
          title="Special For You"
        ></Header>
        <AnimeList api={recommendedAnime} />
      </section>
      {/* {Featured Collection} */}
      <section className="mb-12">
        <Header
          title="Featured Collection"
        ></Header>
        <CollectionList api1={animeTv} api2={animeMovie} api3={animeSpecial} />
      </section>
      {/* {Anime Mendatang} */}
      <section className="mb-12">
        <Header
          title="Upcoming Anime"
        ></Header>
        <AnimeList api={upcomingAnime} />
      </section>
      {/* {Anime Terpopuler} */}
      <section className="mb-12">
        <Header
          title="Popular Anime"
        ></Header>
        <AnimeList
          api={topAnime}
          linkTitle="Lihat Semua"
          linkHref="/popular"
        />
      </section>
    </>
  );
};

export default Page;

