"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SearchInput = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (keyword && keyword.trim() != "") router.push(`/search/${keyword}`);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="cari anime ..."
        className=" py-2 pl-3 rounded-md pr-10 w-80"
        ref={searchRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(e);
        }}
      />
      <button
        className="absolute end-3 top-2 text-gray-400"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={25} />
      </button>
    </div>
  );
};

export default SearchInput;
