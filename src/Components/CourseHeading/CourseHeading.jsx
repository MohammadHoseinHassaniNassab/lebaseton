import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import CourseEpisode from '../CourseEpisode/CourseEpisode'

export default function CourseHeading(props) {
    function showCourseEpisodes(event) {
        console.log(event.target);
    }

    return (
        <div type="single" collapsible>
            <div className='flex flex-col mt-2' value='item-1'>
                <div className='bg-gray-100 rounded-2xl overflow-hidden'>
                    {/* course headings */}
                    <label for={props.headingID} className='collapse-title text-lg font-[500] w-full flex items-center justify-between cursor-pointer p-4' onClick={showCourseEpisodes}>
                        پیش نیاز های دوره
                        <IoIosArrowDown className='' />
                    </label>
            
                    {/* course episodes container */}
                    <div className='flex flex-col'>
                        {/* course episodes */}
                        <CourseEpisode episodeTitle='سوزن نخ کردن' episodeTime='12:20' episodeID='1' />
                        <CourseEpisode episodeTitle='دوخت یقه' episodeTime='8:30' episodeID='2' />
                        <CourseEpisode episodeTitle='جا دکمه' episodeTime='12:10' episodeID='3' />
                        <CourseEpisode episodeTitle='حلقه آستین' episodeTime='18:15' episodeID='4' />
                        <CourseEpisode episodeTitle='حرف دل' episodeTime='3:36' episodeID='5' />
                        <CourseEpisode episodeTitle='نکات تکمیلی' episodeTime='2:01' episodeID='6' />
                    </div>
                </div>
            </div>
        </div>
    )
}
