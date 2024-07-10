"use client";
import { useEffect } from "react";

const Carrousel = ({ api }) => {
    useEffect(() => {
        const init = async () => {
            const { Carousel, initTWE } = await import("tw-elements");
            initTWE({ Carousel });
        };
        init();
    }, [api]);

    return (
        <div
            id="carouselDarkVariant"
            className="relative"
            data-twe-carousel-init
            data-twe-ride="carousel">
            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div
                    className="absolute z-[90] w-fit right-0 h-full mb-4 flex flex-col list-none justify-center p-0 items-end pr-16 gap-5"
                    data-twe-carousel-indicators>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        data-twe-slide-to="0"
                        data-twe-carousel-active
                        className="mx-[3px] box-content size-5 rounded-full flex-initial cursor-pointer border-0  border-solid border-transparent bg-[#fff] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        className="mx-[3px] box-content size-5 rounded-full flex-initial cursor-pointer border-0 border-solid border-transparent bg-[#fff] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        data-twe-slide-to="1"
                        aria-label="Slide 1"></button>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        className="mx-[3px] box-content size-5 rounded-full flex-initial cursor-pointer border-0 border-solid border-transparent bg-[#fff] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        data-twe-slide-to="2"
                        aria-label="Slide 1"></button>
                </div>
                {api.data?.map((anime, index) => {
                    let truncatedSynopsis = anime.synopsis.length > 165
                        ? `${anime.synopsis.substring(0, 165)}...`
                        : anime.synopsis;
                    return (
                        <div
                            key={anime.mal_id}
                            className="relative float-left -mr-[100%] h-fit w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-twe-carousel-fade
                            data-twe-carousel-item
                            {...(index === 0 && { "data-twe-carousel-active": true })}
                        >
                            <img
                                src={anime.trailer.images.maximum_image_url}
                                className="block w-full h-[77vh] object-cover"
                                alt="image" />
                            {/* <iframe
                                src={anime.trailer.embed_url}
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                                className="block w-full h-[77vh] object-cover"
                                muted
                                autoplay
                            /> */}
                            <div className="absolute h-full w-full bg-gradient-to-t from-black to-transparent z-10 top-0"></div>
                            <div
                                className="absolute h-[80%] w-full flex flex-col justify-end items-start top-0 px-16 text-[#fff] z-20 gap-4 eczar">
                                <div className="text-6xl font-bold w-[70%]">{anime.title}</div>
                                <div className="text-lg w-[50%]">{truncatedSynopsis}</div>
                                <div className="flex gap-4">
                                    <a href={`/anime/${anime.mal_id}`} className="cursor-pointer text-[#272829] bg-[#fff] py-2 px-5 rounded-lg shadow-lg text-base transition-all duration-300 hover:bg-[#B3AC9D]">See More</a>
                                    <a className="cursor-pointer bg-[#CF7500] py-2 px-5 rounded-lg shadow-lg text-base transition-all duration-300 hover:bg-[#F0A500]">Watch Later</a>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Carrousel;