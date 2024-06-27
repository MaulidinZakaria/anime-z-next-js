'use client'

import { getAnimeResponse } from "@/libs/api-libs"
import Image from 'next/image';
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Page = ({ params: { id } }) => {
    const [show, setShow] = useState('overview')
    const [anime, setAnime] = useState(null)
    const [videos, setVideos] = useState(null)
    const [characters, setCharacters] = useState(null)
    const [staffs, setStaff] = useState(null)

    const fetchData = async () => {
        const response1 = await getAnimeResponse(`anime/${id}`)
        setAnime(response1)
        const response2 = await getAnimeResponse(`anime/${id}/videos`)
        setVideos(response2)
        const response3 = await getAnimeResponse(`anime/${id}/characters`)
        setCharacters(response3)
        const response4 = await getAnimeResponse(`anime/${id}/staff`)
        setStaff(response4)
    };

    useEffect(() => {
        fetchData();
    }, [show]);

    return (
        <>
            <div className="h-[35vh] w-full relative -top-[10vh] relative">
                <img src={anime?.data?.trailer?.images.maximum_image_url} alt="" className="w-full h-full object-cover" />
                <div className="w-full h-full absolute z-[1] left-0 top-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                <button className="py-2 px-4 bg-white absolute z-[2] right-[64px] bottom-5 text-black text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-300 animate-bounce">Watch Trailer</button>
            </div>
            <div className="px-16 w-full flex gap-20 relative -mt-[5vh] mb-[150px] relative">
                <div className="w-[350px] h-fit relative">
                    <img src={anime?.data?.images?.webp.large_image_url} alt="" className="w-full rounded-lg  shadow-xl object-cover absolute z-[5] -top-[150px]" />
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                    <div className="text-5xl text-white font-bold">{anime?.data?.title}</div>
                    <div className="text-xl text-gray-300 font-normal flex">{anime?.data?.score}</div>
                    <div className="flex justify-between items-center w-full mt-5">
                        <div className="flex justify-start items-center gap-4">
                            <button className="py-2 px-4 bg-[#CF7500] text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#F0A500]">Watching</button>
                            <button className="py-2 px-4 bg-[#CF7500] text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#F0A500]">To Watch</button>
                            <button className="py-2 px-4 bg-[#CF7500] text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#F0A500]">Watched</button>
                        </div>
                        <button className="py-2 px-4 bg-[#CF7500] text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#F0A500]">Add to Collection</button>
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
                :
                ''}
            {show == 'videos' ?
                <div className="px-16 w-full flex flex-col gap-6 mb-12">
                    {videos.data.promo && videos.data.promo.length > 0 ?
                        <div className="flex flex-col gap-4">
                            <div className="font-semibold text-2xl text-white">
                                Promotion Videos
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 w-full gap-4 lg:gap-8">
                                {videos.data.promo.map((video, index) => (
                                    <a href={video.trailer.url} className="cols-span-1 flex flex-col gap-2 group cursor-pointer" key={index}>
                                        <div className="h-[120px] rounded-lg shadow-lg overflow-hidden relative border-2 border-transparent group-hover:border-[#F0A500] duartion-300 transition-all">
                                            <div className="absolute h-full w-full bg-black/50 z-[99] group-hover:flex hidden transition-all duration-300 text-[#F0A500] flex justify-center items-center text-4xl">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <img src={video.trailer.images.large_image_url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" />
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
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 w-full gap-4 lg:gap-8">
                                {videos.data.episodes.map((video, index) => (
                                    <a href={video.url} className="cols-span-1 flex flex-col gap-2 group cursor-pointer" key={index}>
                                        <div className="h-[120px] rounded-lg shadow-lg overflow-hidden relative border-2 border-transparent group-hover:border-[#F0A500] duartion-300 transition-all">
                                            <div className="absolute h-full w-full bg-black/50 z-[99] group-hover:flex hidden transition-all duration-300 text-[#F0A500] flex justify-center items-center text-4xl">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <img src={video.images.jpg.image_url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" />
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
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 w-full gap-4 lg:gap-8">
                            {characters.data.map((character, index) => (
                                <div className="cols-span-1 flex flex-col gap-2 group" key={index}>
                                    <div className="h-[240px] rounded-lg shadow-lg overflow-hidden relative">
                                        <div className="absolute z-[2] w-full h-full group-hover:opacity-0 opacity-100 transition-all duration-500 top-0">
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
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 w-full gap-4 lg:gap-8">
                            {staffs.data.map((staff, index) => (
                                <div className="cols-span-1 flex flex-col gap-2 group" key={index}>
                                    <div className="h-[240px] rounded-lg shadow-lg overflow-hidden">
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
                    <div className="flex flex-col gap-4">
                        <div className="font-semibold text-2xl text-white">
                            Recent Reviews
                        </div>
                        <button className="flex items-center justify-center w-[60vw] bg-white text-black py-3 rounded-lg shadow-xl font-semibold text-base">Write a Review</button>
                        <div className="flex flex-col w-[60vw] gap-6">
                            <div className=""></div>
                        </div>
                    </div>
                </div>
                :
                ''}
        </>
    )
}

export default Page