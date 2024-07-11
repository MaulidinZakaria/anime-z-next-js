import CollectionList from "@/components/CollectionList";
import { getAnimeResponse } from "@/libs/api-libs";

export const Page = async () => {
    // Fetch data for different types of anime
    const animeTypes = ["tv", "movie", "special", "ona", "music", "tv_special"];
    const fetchAnimeData = animeTypes.map(type => getAnimeResponse(`top/anime`, `type=${type}&limit=3`));
    const animeData = await Promise.all(fetchAnimeData);

    // Destructure the fetched data
    const [tv, movie, special, ona, music, tvSpecial] = animeData;

    return (
        <div className="my-12">
            <div className="flex justify-between px-16 items-center mb-12">
                <h3 className="text-center text-2xl text-white">Featured Collection</h3>
                {/* <button className="flex justify-center items-center gap-2 py-2 px-4 bg-white text-black rounded-lg shadow-lg font-medium text-base transition-all duration-300 hover:bg-[#D8D9DA]">
                    <p>Create New</p>
                </button> */}
            </div>
            <CollectionList
                api1={tv}
                api2={movie}
                api3={special}
                api4={ona}
                api5={music}
                api6={tvSpecial}
            />
        </div>
    );
}

export default Page;
