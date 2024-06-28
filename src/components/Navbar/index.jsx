import Link from "next/link";
import SearchInput from "./SearchInput";
import { Image } from 'next/image';
import UserActionButton from "./UserActionButton";
import Menu from "./Menu";

const Navbar = () => {
    return (
        <header className="relative top-0 w-full bg-[#272829]/30 z-[999]">
            <div className="flex justify-between py-4 items-center px-12 md:px-16">
                <Link href="/">
                    <img src="/logo/logo-white.png" className="h-9 w-full"></img>
                </Link>
                <Menu />
                <div className="flex gap-4 items-center">
                    <SearchInput />
                    <UserActionButton />
                </div>
            </div>
        </header>
    )
}

export default Navbar