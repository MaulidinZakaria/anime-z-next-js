import CollectionList from "@/components/CollectionList";
import { getAnimeResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";

export const Page = async () => {
    // Fetch data for different types of anime
    const user = await authUserSession();

    return (
        <div className="my-12">
            <div className="flex justify-between px-16 items-center mb-12">
                <h3 className="text-center text-2xl text-white">{user?.name}</h3>
                <h3 className="text-center text-2xl text-white">{user?.email}</h3>
                <button className="flex justify-center items-center gap-2 py-2 px-4 bg-white text-black rounded-lg shadow-lg font-medium text-base transition-all duration-300 hover:bg-[#D8D9DA]">
                    <p>Create New</p>
                </button>
            </div>
        </div>
    );
}

export default Page;
