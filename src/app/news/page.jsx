'use client'

import { useEffect, useState } from 'react';
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
    const [sortedNewsData, setSortedNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch top 12 anime
                const top = await getAnimeResponse("top/anime", "limit=25");
                const ids = top?.data?.slice(1, 24).map((item) => item.mal_id) || [];

                // Batch fetch news for these anime
                const newsPromises = ids.map((id) => getAnimeResponse(`anime/${id}/news`));
                const newsResponses = await Promise.all(newsPromises);
                const newsData = newsResponses.flatMap((response) => response?.data || []);

                // Sort news by date
                const sortedData = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
                setSortedNewsData(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once on mount

    // Function to format date from 'yyyy-mm-dd' to 'Month day, year'
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('id-ID', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
    };

    return (
        <>
            {loading ? (
                <div className="relative flex justify-center items-center min-h-[100vh] w-full">
                    <div className="spinner"></div>
                </div>
            ) : (
                <>
                    <div className="w-full h-[70vh] relative -top-[10vh]">
                        <img
                            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/spring-2023-anime-lineup-where-to-stream-every-series-featured-image.jpg"
                            alt="Anime News"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent h-full w-full flex justify-start items-end px-16 py-[140px]">
                            <div className="text-6xl w-[50%] font-bold text-white">
                                Stay Updated with the Latest Anime News!
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-16 grid grid-cols-12 gap-8 mb-12 -mt-16">
                        {sortedNewsData.slice(0, 10).map((item, index) => {
                            const colSpanClass = [0, 1, 2].includes(index % 7) ? 'col-span-4' : 'col-span-3';

                            return (
                                <div
                                    key={index}
                                    className={`${colSpanClass} relative h-[320px] rounded-lg shadow-xl overflow-hidden group`}
                                >
                                    <img
                                        src={item?.images.jpg.image_url}
                                        alt={item?.title}
                                        className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300 brightness-90"
                                    />
                                    <div className="absolute px-6 py-3 bottom-0 min-h-[30%] w-full bg-gradient-to-t from-black/80 to-transparent rounded-b-lg flex flex-col justify-end">
                                        <div className="text-sm text-gray-200">
                                            {formatDate(item?.date.substring(0, 10))}
                                        </div>
                                        <div className="font-semibold text-lg text-white">{item?.title}</div>
                                    </div>
                                </div>
                            );
                        })}
                        <button className="text-lg font-semibold transition-all duration-300 hover:bg-[#D8D9DA] col-span-12 text-center cursor-pointer bg-white py-2 rounded-lg">
                            Show More
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default Page;
