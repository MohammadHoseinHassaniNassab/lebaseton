import React from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function CourseEpisode(props) {
    return (
        <Link to={'../../lessons/' + props.episodeID} className='bg-gray-200 p-4 flex items-center justify-between transition-colors duration-300 hover:bg-gray-400'>
            <span>{props.episodeTitle} <sub>(نقدی)</sub></span>
            <div className='flex items-center justify-center gap-2'>
                <div className='font-[500] hidden md:flex items-center text-center'>{props.episodeTime}</div>
                <AiOutlinePlayCircle className='text-2xl' />
                <FiLock />
            </div>
        </Link>
    )
}
