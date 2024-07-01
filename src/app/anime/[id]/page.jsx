'use client'

import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faCirclePlay, faPlus, faBookmark as faBookmarkSolid, faCheck } from '@fortawesome/free-solid-svg-icons';

const Page = ({ params: { id } }) => {
    const [show, setShow] = useState('overview')
    const [anime, setAnime] = useState(null)
    const [videos, setVideos] = useState(null)
    const [characters, setCharacters] = useState(null)
    const [staffs, setStaff] = useState(null)
    const [reviews, setReviews] = useState(null)
    const [recomendation, setRecomendation] = useState(null)

    const fetchData = async () => {
        const response1 = await getAnimeResponse(`anime/${id}`)
        setAnime(response1)
        const response2 = await getAnimeResponse(`anime/${id}/videos`)
        setVideos(response2)
        const response3 = await getAnimeResponse(`anime/${id}/characters`)
        setCharacters(response3)
        const response4 = await getAnimeResponse(`anime/${id}/staff`)
        setStaff(response4)
        const response5 = await getAnimeResponse(`anime/${id}/reviews`)
        setReviews(response5)
        const response6 = await getAnimeResponse(`anime/${id}/recommendations`)
        setRecomendation(response6)
    };

    useEffect(() => {
        fetchData();
    }, [show]);

    return (
        <>
            <div className="h-[35vh] w-full relative -top-[10vh] relative">
                <img src={anime?.data?.trailer?.images.maximum_image_url??anime?.data?.images.webp.large_image_url} alt="" className="w-full h-full object-cover" />
                <div className="w-full h-full absolute z-[1] left-0 top-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                <a href={anime?.data?.trailer.url} className="py-2 px-4 bg-white absolute z-[2] right-[64px] bottom-5 text-black text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-300 animate-bounce flex gap-2 items-center justify-center">
                    <FontAwesomeIcon icon={faCirclePlay} />
                    <p>Watch Trailer</p>
                </a>
            </div>
            <div className="px-16 w-full flex gap-20 relative -mt-[5vh] mb-[150px] relative">
                <div className="w-[350px] h-fit relative">
                    <img src={anime?.data?.images?.webp.large_image_url} alt="" className="w-full rounded-lg  shadow-xl object-cover absolute z-[5] -top-[150px]" />
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                    <div className="text-5xl text-white font-bold">{anime?.data?.title}</div>
                    <div className="text-xl text-gray-300 font-normal flex items-center gap-2">
                        <FontAwesomeIcon icon={faStar} />
                        <p>{anime?.data?.score}</p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-5">
                        <div className="flex justify-start items-center gap-4">
                            <button className="py-2 px-4 bg-[#CF7500] text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#F0A500] flex items-center gap-2">
                                <FontAwesomeIcon icon={faEye} />
                                <p>Watching</p>
                            </button>
                            <button className="py-2 px-4 bg-[#CF7500] text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#F0A500] flex items-center gap-2">
                                <FontAwesomeIcon icon={faBookmark} />
                                <p>To Watch</p>
                            </button>
                            <button className="py-2 px-4 bg-[#CF7500] text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#F0A500] flex items-center gap-2">
                                <FontAwesomeIcon icon={faCheck} />
                                <p>Watched</p>
                            </button>
                        </div>
                        <button className="py-2 px-4 bg-[#CF7500] text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#F0A500] flex items-center gap-2">
                            <FontAwesomeIcon icon={faPlus} />
                            <p>Add to Collection</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-16 w-full flex justify-start items-center mb-12">
                <div className={`relative text-xl font-medium group hover:text-white transition-all duration-300 cursor-pointer ${show == 'overview' ? 'text-white' : 'text-gray-400'}`}>
                    <button onClick={() => setShow('overview')} className="py-2 px-6">Overview</button>
                    <div className={`h-[2px] w-full absolute bottom-0 group-hover:bg-white transition-all duration-300 ${show == 'overview' ? 'bg-white' : 'bg-gray-700'}`}></div>
                </div>
                <div className={`relative text-xl font-medium group hover:text-white transition-all duration-300 cursor-pointer ${show == 'videos' ? 'text-white' : 'text-gray-400'}`}>
                    <button onClick={() => setShow('videos')} className="py-2 px-6">Videos</button>
                    <div className={`h-[2px] w-full absolute bottom-0 group-hover:bg-white transition-all duration-300 ${show == 'videos' ? 'bg-white' : 'bg-gray-700'}`}></div>
                </div>
                <div className={`relative text-xl font-medium group hover:text-white transition-all duration-300 cursor-pointer ${show == 'characters' ? 'text-white' : 'text-gray-400'}`}>
                    <button onClick={() => setShow('characters')} className="py-2 px-6">Characters</button>
                    <div className={`h-[2px] w-full absolute bottom-0 group-hover:bg-white transition-all duration-300 ${show == 'characters' ? 'bg-white' : 'bg-gray-700'}`}></div>
                </div>
                <div className={`relative text-xl font-medium group hover:text-white transition-all duration-300 cursor-pointer ${show == 'staff' ? 'text-white' : 'text-gray-400'}`}>
                    <button onClick={() => setShow('staff')} className="py-2 px-6">Staff</button>
                    <div className={`h-[2px] w-full absolute bottom-0 group-hover:bg-white transition-all duration-300 ${show == 'staff' ? 'bg-white' : 'bg-gray-700'}`}></div>
                </div>
                <div className={`relative text-xl font-medium group hover:text-white transition-all duration-300 cursor-pointer ${show == 'reviews' ? 'text-white' : 'text-gray-400'}`}>
                    <button onClick={() => setShow('reviews')} className="py-2 px-6">Reviews</button>
                    <div className={`h-[2px] w-full absolute bottom-0 group-hover:bg-white transition-all duration-300 ${show == 'reviews' ? 'bg-white' : 'bg-gray-700'}`}></div>
                </div>
            </div>

            {show == 'overview' ?
                <div className="flex flex-col">
                    <div className="px-16 w-full flex flex-col gap-4 mb-12">
                        <div className="font-semibold text-2xl text-white flex">
                            <div className="basis-1/3">Details</div>
                            <div className="basis-2/3">Description</div>
                        </div>
                        <div className="flex">
                            <div className="basis-1/3 flex flex-col gap-2">
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Type</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">{anime?.data?.type ?? '-'}</div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Episodes</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">{anime?.data?.episodes ?? '-'}</div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Genres</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">
                                        {anime?.data?.genres && anime?.data?.genres.length > 0 ? (
                                            anime?.data?.genres.map((genre, index) => (
                                                <span key={index}>
                                                    {genre.name}
                                                    {index < anime?.data?.genres.length - 1 ? ', ' : ''}
                                                </span>
                                            ))
                                        ) : (
                                            <span>-</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Aired</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">{anime?.data?.aired.string ?? '-'}</div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Status</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">{anime?.data?.status ?? '-'}</div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Season</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">{anime?.data?.season ?? '-'}, {anime?.data?.year ?? '-'}</div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Studios</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">
                                        {anime?.data?.studios && anime?.data?.studios.length > 0 ? (
                                            anime?.data?.studios.map((studio, index) => (
                                                <span key={index}>
                                                    {studio.name}
                                                    {index < anime?.data?.studios.length - 1 ? ', ' : ''}
                                                </span>
                                            ))
                                        ) : (
                                            <span>-</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Source</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">{anime?.data?.source ?? '-'}</div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Rating</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">{anime?.data?.rating ?? '-'}</div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="basis-1/3 text-base font-thin text-gray-400">Duration</div>
                                    <div className="basis-2/3 text-base font-thin text-gray-200">{anime?.data?.duration ?? '-'}</div>
                                </div>
                            </div>
                            <div className="basis-2/3 text-lg font-thin text-gray-300 text-justify">{anime?.data?.synopsis ?? 'No Description'}</div>
                        </div>
                    </div>
                    <div className="px-16 w-full flex flex-col gap-6 mb-12">
                        <div className="font-semibold text-2xl text-white">
                            Special For You
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 w-full gap-4 lg:gap-8">
                            {recomendation?.data?.slice(0, 6).map((anime, index) => {
                                return (
                                    <Link href={`/anime/${anime.entry.mal_id}`} className="cursor-pointer text-[#fff] transition-all duration-300 relative group" key={index}>
                                        <div className="w-full h-64 overflow-hidden rounded-xl shadow-xl">
                                            <Image
                                                src={anime.entry.images.jpg.large_image_url}
                                                alt="..."
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover  group-hover:scale-110 duration-300 transition-all"
                                            ></Image>
                                        </div>
                                        <div className="absolute bg-gradient-to-t from-black/80 to-transparent h-[50%] w-full flex flex-col justify-end items-start p-4 rounded-xl bottom-0">
                                            <h3 className="font-semibold md:text-lg text-base truncate w-full">{anime.entry.title}</h3>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                :
                ''}
            {show == 'videos' ?
                <div className="px-16 w-full flex flex-col gap-6 mb-12">
                    {videos.data.promo && videos.data.promo.length > 0 ?
                        <div className="flex flex-col gap-4">
                            <div className="font-semibold text-2xl text-white">
                                Promotion Videos
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 w-full gap-4 lg:gap-6">
                                {videos.data.promo.map((video, index) => (
                                    <a href={video.trailer.url} className="cols-span-1 flex flex-col gap-2 group cursor-pointer" key={index}>
                                        <div className="h-[140px] rounded-lg shadow-lg overflow-hidden relative border-2 border-transparent group-hover:border-[#F0A500] duartion-300 transition-all">
                                            <div className="absolute h-full w-full bg-black/50 z-[99] group-hover:flex hidden transition-all duration-300 text-[#F0A500] flex justify-center items-center text-4xl">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <img src={video.trailer.images.maximum_image_url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" />
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-full">
                                            <div className="text-center font-semibold text-white">{video.title}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        : ''}
                    {videos.data.episodes && videos.data.episodes.length > 0 ?
                        <div className="flex flex-col gap-4">
                            <div className="font-semibold text-2xl text-white">
                                All Episodes
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 w-full gap-4 lg:gap-6">
                                {videos.data.episodes.map((video, index) => (
                                    <a href={video.url} className="cols-span-1 flex flex-col gap-2 group cursor-pointer" key={index}>
                                        <div className="h-[140px] rounded-lg shadow-lg overflow-hidden relative border-2 border-transparent group-hover:border-[#F0A500] duartion-300 transition-all">
                                            <div className="absolute h-full w-full bg-black/50 z-[99] group-hover:flex hidden transition-all duration-300 text-[#F0A500] flex justify-center items-center text-4xl">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <img src={video.images.jpg.image_url??anime?.data?.images.webp.large_image_url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" />
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-full">
                                            <div className="text-center font-semibold text-white">{video.episode}</div>
                                            <div className="text-center font-light text-gray-200">{video.title}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        : ''}
                </div>
                :
                ''}

            {show == 'characters' ?
                <div className="px-16 w-full flex flex-col gap-6 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="font-semibold text-2xl text-white">
                            Anime Characters
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 w-full gap-4 lg:gap-10">
                            {characters.data.map((character, index) => (
                                <div className="cols-span-1 flex flex-col gap-2 group" key={index}>
                                    <div className="h-[260px] rounded-lg shadow-lg overflow-hidden relative">
                                        <div className="absolute z-[2] w-full h-full group-hover:opacity-0 opacity-100 transition-all ease-in-out duration-300 top-0">
                                            <img src={character.character.images.webp.image_url} alt="" className="w-full h-full object-cover" />
                                            <div className="absolute h-[40%] w-full bottom-0 flex flex-col items-start justify-end py-3 px-4 bg-gradient-to-t from-black/80 to-transparent">
                                                <div className="text-base font-semibold text-white">{character.character.name}</div>
                                                <div className="text-sm text-gray-300">{character.role}</div>
                                            </div>
                                        </div>
                                        <div className="w-full h-full">
                                            <img src={character.voice_actors[0]?.person?.images.jpg.image_url ?? '/images/profil.jpeg'} alt="" className="w-full h-full object-cover" />
                                            <div className="absolute h-[40%] w-full bottom-0 flex flex-col items-start justify-end py-3 px-4 bg-gradient-to-t from-black/80 to-transparent">
                                                <div className="text-base font-semibold text-white">{character.voice_actors[0]?.person?.name}</div>
                                                <div className="text-sm text-gray-300">{character.voice_actors[0]?.language}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                :
                ''}

            {show == 'staff' ?
                <div className="px-16 w-full flex flex-col gap-6 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="font-semibold text-2xl text-white">
                            Staff
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 w-full gap-4 lg:gap-10">
                            {staffs.data.map((staff, index) => (
                                <div className="cols-span-1 flex flex-col gap-2 group" key={index}>
                                    <div className="h-[260px] rounded-lg shadow-lg overflow-hidden">
                                        <div className="w-full h-full relative">
                                            <img src={staff.person?.images?.jpg.image_url == 'https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c' ? '/images/profil.jpeg' : staff.person?.images?.jpg.image_url} alt="" className="w-full h-full object-cover" />
                                            <div className="absolute h-[40%] w-full bottom-0 flex flex-col items-start justify-end py-3 px-4 bg-gradient-to-t from-black/80 to-transparent">
                                                <div className="text-base font-semibold text-white">{staff.person.name}</div>
                                                <div className="text-sm text-gray-300">{staff.positions}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                :
                ''}

            {show == 'reviews' ?
                <div className="px-16 w-full flex flex-col gap-6 mb-12">
                    <div className="flex flex-col gap-6">
                        <div className="font-semibold text-2xl text-white">
                            Recent Reviews
                        </div>
                        <button className="flex items-center justify-center w-[60vw] bg-white text-black py-3 rounded-lg shadow-xl font-semibold text-base mb-2">Write a Review</button>
                        <div className="flex flex-col w-[60vw] gap-6">
                            {reviews.data.map((review, index) => (
                                <div className="flex w-full gap-6" key={index}>
                                    <div className="flex justify-center items-start">
                                        <img alt="" src={review.user.images.webp.image_url} className="size-11 rounded-full object-cover" />
                                    </div>
                                    <div className="flex w-full flex-col gap-2">
                                        <div className="flex gap-3 justify-start items-center">
                                            <div className="text-white text-lg font-semibold">{review.user.username}</div>
                                            <div className="text-[16px] text-gray-400 font-thin">{review.date.substring(0, 10)}</div>
                                        </div>
                                        <div className="text-gray-300 text-justify text-base font-light">{review.review}</div>
                                        <div className="flex gap-3 justify-end">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="text-xl">👍</div>
                                                <div className="text-sm font-normal text-gray-300">{review.reactions.nice}</div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="text-xl">😍</div>
                                                <div className="text-sm font-normal text-gray-300">{review.reactions.love_it}</div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="text-xl">😂</div>
                                                <div className="text-sm font-normal text-gray-300">{review.reactions.funny}</div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="text-xl">🤔</div>
                                                <div className="text-sm font-normal text-gray-300">{review.reactions.confusing}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                :
                ''}
        </>
    )
}

export default Page