"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ReviewInput = ({ anime_mal_id, user_email, username, user_image }) => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [messageRating, setMessageRating] = useState(null);
    const [messageReview, setMessageReview] = useState(null);
    const router = useRouter();
    const stars = Array(5).fill(0);
    const text = ["", "Terrible", "Bad", "Good", "Very Good", "Recommended"];

    const handleInput = (e) => {
        setReview(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(rating === 0) {
            setMessageRating("Please rate the anime");
            return;
        } else if(review.length < 3) {
            setMessageReview("Minimum characters in review must be 3");
            return;
        }

        const closeModal = document.getElementById("closeModal");
        closeModal.click();

        const data = { anime_mal_id, user_email, username, user_image, review, rating }

        const response = await fetch("/api/v1/review", {
            method: "POST",
            body: JSON.stringify(data),
        })

        const reviewRes = await response.json()

        router.refresh()
    }

    const handleRating = (num) => {
        setRating(num);
    }

    const handleMouseOver = (num) => {
        setHover(num);
    }

    const handleMouseLeave = () => {
        setHover(0);
    }

    useEffect(() => {
        const init = async () => {
            const { Modal, Ripple, initTWE } = await import("tw-elements");
            initTWE({ Modal, Ripple });
        };
        init();
    }, []);


    return (
        <>
            <div className="space-y-2">
                <button
                    type="button"
                    className="flex items-center justify-center w-[60vw] bg-white text-black py-3 rounded-lg shadow-xl font-semibold text-base mb-2 hover:bg-gray-200 transition-all duration-300"
                    data-twe-toggle="modal"
                    data-twe-target="#exampleModalCenter"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Write a Review
                </button>
            </div>

            <div
                data-twe-modal-init
                className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModalCenter"
                tabIndex="-1"
                aria-labelledby="exampleModalCenterTitle"
                aria-modal="true"
                role="dialog">
                <div
                    data-twe-modal-dialog-ref
                    className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[700px]">
                    <div
                        className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-[#1A1C20] bg-clip-padding text-current shadow-4 outline-none">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-white/60 px-6 py-4">
                            <h5
                                className="text-xl font-medium leading-normal text-white"
                                id="exampleModalCenterTitle">
                                Add A Review ?
                            </h5>
                            <button
                                type="button"
                                className="box-content rounded-none border-none text-gray-400 hover:text-gray-200 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none transition-all duration-300"
                                data-twe-modal-dismiss
                                aria-label="Close">
                                <span className="[&>svg]:h-6 [&>svg]:w-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="relative p-6 flex flex-col gap-4">
                            <div className="flex items-center w-full justify-start">
                                <div className="flex items-center gap-2 w-fit">
                                    {stars.map((_, index) => (
                                        <svg className={`size-5 transition-all duration-300 ${(rating || hover) > index ? "text-yellow-300" : "text-gray-300"}`}
                                            onClick={() => handleRating(index + 1)}
                                            onMouseOver={() => handleMouseOver(index + 1)}
                                            onMouseLeave={handleMouseLeave}
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20" key={index}>
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="ml-4 text-white font-normal">{text[rating]}</p>
                            </div>
                            <p className="text-sm text-red-500 -mt-2">{messageRating != null && messageRating}</p>
                            <textarea name="review" id="review" onChange={handleInput} className="w-full h-[200px] rounded-lg shadow-lg px-4 py-2 bg-[#1A1C20] text-white border-gray-300 border-2" placeholder="Write a Review ..."></textarea>
                            <p className="text-sm text-red-500 -mt-2">{messageReview != null && messageReview}</p>
                        </div>

                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-white/60 px-6 py-4 gap-3">
                            <button
                                type="button"
                                className="inline-block rounded-lg bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#CF7500] transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-[#F0A500]"
                                data-twe-modal-dismiss
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                                id="closeModal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="ms-1 inline-block rounded-lg bg-[#CF7500] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[#CF7500]/50 shadow transition-all duration-300 ease-in-out hover:bg-[#F0A500]"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                                onClick={handleSubmit}>
                                Submit Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewInput;