const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center text-white px-2 gap-4 py-4 text-2l">
            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
            }
            <p>{page} of {lastPage}</p>

            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
            }
        </div>
    )
}

export default Pagination