import AnimeList from "@/components/AnimeList";
import CollectionList from "@/components/CollectionList";
import Carrousel from "@/components/Carrousel";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const [
    topAnime,
    top3Anime,
    upcomingAnime,
    recommendedAnime,
    animeTv,
    animeMovie,
    animeSpecial,
  ] = await Promise.all([
    getAnimeResponse("top/anime", "limit=12"),
    getAnimeResponse("top/anime", "limit=3"),
    // getAnimeResponse("seasons/now", "limit=3"),
    getAnimeResponse("seasons/upcoming", "limit=6"),
    getAnimeResponse("seasons/now", "limit=6"),
    getAnimeResponse("top/anime", "type=tv&limit=3"),
    getAnimeResponse("top/anime", "type=movie&limit=3"),
    getAnimeResponse("top/anime", "type=special&limit=3"),
  ]);

  return (
    <>
      {/* Top Anime Today */}
      <section className="relative -top-[10vh]">
        <Carrousel api={top3Anime} />
      </section>
      <section className="relative z-[2] mb-12 -mt-[15vh]">
        <Header title="Special For You" />
        <AnimeList api={recommendedAnime} />
      </section>
      {/* Featured Collection */}
      <section className="mb-12">
        <Header title="Featured Collection" />
        <CollectionList
          api1={animeTv}
          api2={animeMovie}
          api3={animeSpecial}
        />
      </section>
      {/* Upcoming Anime */}
      <section className="mb-12">
        <Header title="Upcoming Anime" />
        <AnimeList api={upcomingAnime} />
      </section>
      {/* Popular Anime */}
      <section className="mb-12">
        <Header title="Popular Anime" />
        <AnimeList api={topAnime} linkTitle="Lihat Semua" linkHref="/popular" />
      </section>
    </>
  );
};

export default Page;
