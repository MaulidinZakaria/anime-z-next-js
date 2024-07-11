'use client'

import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import AnimeList from '@/components/AnimeList/index';
import { getAnimeResponse } from "@/libs/api-libs";

const Page = ({ params: { id } }) => {
    const [page, setPage] = useState(1)
    const [listAnime, setListAnime] = useState([])

    const fetchData = async () => {
        const data = await getAnimeResponse("top/anime", `type=${id}&page=${page}`)
        setListAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    const title = (id == 'tv_special') ? 'TV SPECIAL' : id.toUpperCase()

    return (
        <>
            <HeaderMenu title={`ANIME ${title} TERPOPULER #${page}`} />
            <AnimeList api={listAnime} />
            <Pagination page={page} lastPage={listAnime.pagination?.last_visible_page} setPage={setPage} />
        </>
    )
}

export default Page
