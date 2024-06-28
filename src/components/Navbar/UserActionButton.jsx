import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

const UserActionButton = async () => {
    const user = await getServerSession(authOption);
    console.log(user);

    return (
        <div>
            <Link href="/api/auth/signin" className="cursor-pointer bg-[#CF7500] py-2 px-5 rounded-lg shadow-lg text-base transition-all duration-300 hover:bg-[#F0A500] text-white text-base font-semibold">Login</Link>
        </div>
    )
}

export default UserActionButton