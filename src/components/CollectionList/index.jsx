import Image from "next/image";
import Link from "next/link";

const CollectionList = ({ api1, api2, api3, api4, api5, api6 }) => {
    const divData = [
        {
            className:
                "overflow-hidden object-cover h-[225px] w-[150px] border-4 border-[#1A1C20] rounded-xl absolute -bottom-[70px] -rotate-[10deg] left-[12%] transition-all duration-300 group-hover:-translate-y-[15px] group-hover:-translate-x-[10px]",
        },
        {
            className:
                "overflow-hidden object-cover h-[225px] w-[150px] border-4 border-[#1A1C20] rounded-xl absolute -bottom-[90px] transition-all duration-300 group-hover:-translate-y-[15px]",
        },
        {
            className:
                "overflow-hidden object-cover h-[225px] w-[150px] border-4 border-[#1A1C20] rounded-xl absolute -bottom-[120px] rotate-[10deg] right-[12%] transition-all duration-300 group-hover:-translate-y-[15px] group-hover:translate-x-[10px]",
        },
    ];

    const renderImages = (apiData) => {
        return apiData?.data?.slice(0, divData.length).map((anime, index) => (
            <Image
                src={anime?.images?.webp?.large_image_url}
                alt={anime?.title}
                className={divData[index].className}
                width={150}
                height={225}
                key={index}
            />
        ));
    };

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 px-12 md:px-16 md:gap-6 lg:gap-10">
            <Link href={`/anime/`} className="flex flex-col cursor-pointer text-[#fff] transition-all relative h-64 bg-[#1A1C20] rounded-xl shadow-lg overflow-hidden group">
                <div className="h-[40%] w-full justify-center items-center text-xl font-medium flex flex-col">
                    The Best <span className="block">Anime TV</span>
                </div>
                <div className="h-[60%] w-full flex justify-center items-center relative">
                    {renderImages(api1)}
                </div>
            </Link>
            <Link href={`/anime/`} className="flex flex-col cursor-pointer text-[#fff] transition-all relative h-64 bg-[#1A1C20] rounded-xl shadow-lg overflow-hidden group">
                <div className="h-[40%] w-full justify-center items-center text-xl font-medium flex flex-col">
                    The Best <span className="block">Anime Movie</span>
                </div>
                <div className="h-[60%] w-full flex justify-center items-center relative">
                    {renderImages(api2)}
                </div>
            </Link>
            <Link href={`/anime/`} className="flex flex-col cursor-pointer text-[#fff] transition-all relative h-64 bg-[#1A1C20] rounded-xl shadow-lg overflow-hidden group">
                <div className="h-[40%] w-full justify-center items-center text-xl font-medium flex flex-col">
                    The Best <span className="block">Anime Special</span>
                </div>
                <div className="h-[60%] w-full flex justify-center items-center relative">
                    {renderImages(api3)}
                </div>
            </Link>
            {api4 ? (
                <Link href={`/anime/`} className="flex flex-col cursor-pointer text-[#fff] transition-all relative h-64 bg-[#1A1C20] rounded-xl shadow-lg overflow-hidden group">
                    <div className="h-[40%] w-full justify-center items-center text-xl font-medium flex flex-col">
                        The Best <span className="block">Anime ONA</span>
                    </div>
                    <div className="h-[60%] w-full flex justify-center items-center relative">
                        {renderImages(api4)}
                    </div>
                </Link>
            ) : null }

            {api5 ? (
                <Link href={`/anime/`} className="flex flex-col cursor-pointer text-[#fff] transition-all relative h-64 bg-[#1A1C20] rounded-xl shadow-lg overflow-hidden group">
                    <div className="h-[40%] w-full justify-center items-center text-xl font-medium flex flex-col">
                        The Best <span className="block">Anime Music</span>
                    </div>
                    <div className="h-[60%] w-full flex justify-center items-center relative">
                        {renderImages(api5)}
                    </div>
                </Link>
            ) : null }

            {api6 ? (
                <Link href={`/anime/`} className="flex flex-col cursor-pointer text-[#fff] transition-all relative h-64 bg-[#1A1C20] rounded-xl shadow-lg overflow-hidden group">
                    <div className="h-[40%] w-full justify-center items-center text-xl font-medium flex flex-col">
                        The Best <span className="block">Anime TV Special</span>
                    </div>
                    <div className="h-[60%] w-full flex justify-center items-center relative">
                        {renderImages(api6)}
                    </div>
                </Link>
            ) : null }
        </div>
    );
};

export default CollectionList;