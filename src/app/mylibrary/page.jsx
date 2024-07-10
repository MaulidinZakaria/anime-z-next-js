import CollectionList from "@/components/CollectionList";
import { getAnimeResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

export const Page = async () => {
    // Fetch data for different types of anime
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: {
            user_email: user?.email,
        },
    });

    return (
        <>
            <div className="relative -top-[10vh]">
                <div className="w-full h-[32vh] relative">
                    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhoRQHzPoS5coajfpSgwt8GSCGIeArKNSMOX5I5XzVLGiHqQ4aMzWYWorGZAjM2EiSa_TmXHmBYod1mU55tImCJZwkIj16g6ZANaOXa7euoGcFSDbywxif1cdMWjfGg4TlONz6GYR-J2ZUbq8WD6mzwX-eCIuVT2NNcGK_PjDtA0zCtzdmQAvqLmOqMgci-=w1600" alt="hero" className="w-full h-full object-cover brightness-90" />
                    <div className="h-full w-full bg-black/50 absolute top-0"></div>
                </div>
                <div className="absolute bottom-0 flex justify-start px-16 items-center gap-7 w-full py-6">
                    <img src={user?.image} alt="hero" className="size-[120px] rounded-full shadow-lg object-cover" />

                    <div className="flex flex-col justify-center items-start gap-1">
                        <h3 className="text-center text-4xl text-white font-bold">{user?.name}</h3>
                        <h3 className="text-center text-xl text-gray-300">{user?.email}</h3>
                    </div>
                </div>
            </div>

            <div className="px-16 w-full flex justify-between items-center mb-8 -mt-12">
                <div className="w-fit flex justify-start items-center">
                    <div className={`relative text-xl font-medium group hover:text-white transition-all duration-300 cursor-pointer text-white`}>
                        <button className="py-3 px-6">Collection</button>
                        <div className={`h-[2px] w-full absolute bottom-0 group-hover:bg-white transition-all duration-300 bg-white`}></div>
                    </div>
                    {/* <div className={`relative text-xl font-medium group hover:text-white transition-all duration-300 cursor-pointer text-gray-400`}>
                        <button className="py-3 px-6">To Watch</button>
                        <div className={`h-[2px] w-full absolute bottom-0 group-hover:bg-white transition-all duration-300 bg-gray-700`}></div>
                    </div> */}
                </div>
                {/* <button className="flex justify-center items-center gap-2 py-2 px-5 bg-white text-black rounded-lg shadow-lg font-medium text-base transition-all duration-300 hover:bg-[#D8D9DA]">
                    <p>Filter</p>
                </button> */}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 w-full gap-4 lg:gap-8 px-16 mb-12">
                {collection?.length == 0 ? <div className="col-span-6 flex flex-col w-full gap-4 justify-center items-center">
                    <img src="/images/no-data.png" alt="" className="w-[22%]" />
                    <div className="text-white text-lg font-semibold">There isn't Collection</div>
                </div> : null}
                {collection?.map((collect, index) => {
                    return (
                        <Link href={`/anime/${collect.anime_mal_id}`} className="cursor-pointer text-[#fff] transition-all duration-300 relative group" key={index}>
                            <div className="w-full h-64 overflow-hidden rounded-xl shadow-xl bg-white">
                                <Image
                                    src={collect.image_url}
                                    alt="..."
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover  group-hover:scale-110 duration-300 transition-all"
                                ></Image>
                            </div>
                            <div className="absolute bg-gradient-to-t from-black/80 to-transparent h-[50%] w-full flex flex-col justify-end items-start p-4 rounded-xl bottom-0">
                                <h3 className="font-semibold md:text-lg text-base truncate w-full">{collect.title}</h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    );
}

export default Page;
