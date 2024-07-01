'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const Menu = ({user}) => {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-center text-lg font-semibold text-gray-300 gap-10">
            <a href="/" className={`cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] hover:border-white ${pathname == '/' ? 'border-white text-white' : 'border-transparent'}`}>Home</a>
            <a href="/popular" className={`cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] hover:border-white ${pathname == '/popular' ? 'border-white text-white' : 'border-transparent'}`}>Popular</a>
            {/* <a href="/catalog" className={`cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] hover:border-white ${pathname == '/catalog' ? 'border-white text-white' : 'border-transparent'}`}>Catalog</a> */}
            <a href="/news" className={`cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] hover:border-white ${pathname == '/news' ? 'border-white text-white' : 'border-transparent'}`}>News</a>
            <a href="/collection" className={`cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] hover:border-white ${pathname == '/collection' ? 'border-white text-white' : 'border-transparent'}`}>Collection</a>
            {user ? <a href="/mylibrary" className={`cursor-pointer hover:text-white transition-all duration-300 border-b-[3px] hover:border-white ${pathname == '/mylibrary' ? 'border-white text-white' : 'border-transparent'}`}>My Library</a> : null}
        </div>
    )
}

export default Menu