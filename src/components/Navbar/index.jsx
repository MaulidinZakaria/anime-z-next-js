import Link from "next/link";
import SearchInput from "./SearchInput";
import { Image } from 'next/image';

const Navbar = () => {
    return (
        <header className="relative top-0 w-full bg-[#272829]/30 z-[999]">
            <div className="flex justify-between py-4 items-center px-12 md:px-16">
                <Link href="/">
                    <img src="/logo/logo-white.png" className="h-9 w-full"></img>
                </Link>
                <div className="w-[35%] flex items-center justify-between text-lg font-semibold text-gray-300">
                    <a className="cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] border-transparent hover:border-white">Home</a>
                    <a className="cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] border-transparent hover:border-white">Popular</a>
                    <a className="cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] border-transparent hover:border-white">Catalog</a>
                    <a className="cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] border-transparent hover:border-white">News</a>
                    <a className="cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] border-transparent hover:border-white">Collection</a>
                </div>
                <div className="flex gap-4 items-center">
                    <SearchInput />
                    <a className="cursor-pointer bg-[#CF7500] py-2 px-5 rounded-lg shadow-lg text-base transition-all duration-300 hover:bg-[#F0A500] text-white text-base font-semibold">Login</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar