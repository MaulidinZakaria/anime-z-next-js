'use client'

import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter();

  return (
    <main className="h-[78vh] w-full flex flex-col justify-center items-center bg-black">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5" onClick={() => router.back()}>
        <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-1 group-hover:translate-x-1"></span>
          <span className="relative block px-8 py-3 bg-black border border-current group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform">
            <span>Go Back</span>
          </span>
        </div>
      </button>
    </main>
  )
}

export default Page
