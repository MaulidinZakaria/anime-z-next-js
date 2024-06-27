"use client"

import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button onClick={handleVideoPlayer} className="text-black float-right bg-white px-3 mb-1 rounded">X</button>
                <Youtube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 w-32 bg-white text-black rounded text-lg shadow-md hover:bg-color-accent transition-all">Tonton Trailer</button>
        )
    }

    const option = {
        width: "300",
        height: "250"
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />
}

export default VideoPlayer