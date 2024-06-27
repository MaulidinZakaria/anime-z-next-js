import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api, linkHref, linkTitle }) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 px-12 md:px-16 md:gap-6 lg:gap-10 lg:grid-cols-6">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-[#fff] transition-all duration-300 relative group" key={index}>
            <div className="w-full h-64 overflow-hidden rounded-xl shadow-xl">
              <Image
                src={anime.images.jpg.large_image_url}
                alt="..."
                width={500}
                height={500}
                className="w-full h-full object-cover  group-hover:scale-110 duration-300 transition-all"
              ></Image>
            </div>
            <div className="absolute bg-gradient-to-t from-black/80 to-transparent h-[50%] w-full flex flex-col justify-end items-start p-4 rounded-xl bottom-0">
              <h3 className="font-semibold md:text-lg text-base truncate w-full">{anime.title}</h3>
              <div className="text-sm font-normal text-[#D8D9DA]">{anime.year??'-'}, {anime.genres[0]?.name??'-'}</div>
            </div>
          </Link>
        );
      })}
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-lg font-semibold transition-all duration-300 hover:bg-[#D8D9DA] col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-6 text-center cursor-pointer bg-[#fff] py-2 rounded-lg"
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
          See More
        </Link>
      ) : null}
    </div>
  );
};

export default AnimeList;
