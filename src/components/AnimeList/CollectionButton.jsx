'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

import React from 'react';

const CollectionButton = ({ anime_mal_id, user_email, collectionStatus, image_url, title }) => {

    const [status, setStatus] = useState(false)
    const [collStatus, setCollStatus] = useState(collectionStatus)

    useEffect(() => {
        setCollStatus(collectionStatus)
    }, [collectionStatus])

    const handleCollection = async (event) => {
        event.preventDefault()

        const button = document.getElementById('btn')
        button.disabled = true

        setTimeout(() => {
            button.disabled = false
        }, 500)

        const data = { anime_mal_id, user_email, image_url, title }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data),
        })

        const collection = await response.json()

        if (collection.status == 200) {
            setStatus(collection.isCreated)
            setCollStatus(collection.isCreated)
        }
    }

    return (
        <>
            <button id='btn' onClick={handleCollection} className="py-2 px-4 bg-[#CF7500] text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-500 hover:bg-[#F0A500] flex items-center gap-2">
                <FontAwesomeIcon icon={status || collStatus ? faMinus : faPlus} />
                <p>{status || collStatus ? 'Remove from Collection' : 'Add to Collection'}</p>
            </button>
        </>
    )
}
export default CollectionButton