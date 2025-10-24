import React from 'react';
import { LuClock4 } from 'react-icons/lu';
import { IoPersonCircleOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';

function BlogCard(props) {
    return (
        <div className='flex flex-col relative flex-grow bg-white border rounded-xl transition-all duration-500 justify-between gap-y-8' href='#'>
            <div className='flex flex-col gap-y-2'>
                <div className='relative'>
                    <Link to={'/teachers/' + props.id} className='w-full mb-3 lg:mb-0 rounded-xl flex justify-center bg-white overflow-hidden before:absolute before:bg-gradient-to-t before:from-white before:to-transparent before:w-full before:h-3/4 before:bottom-0'>
                        <img className='rounded-xl' src={props.topic_image_location} alt='course_pic' />
                    </Link>
                </div>
                <div className='px-4 pt-1'>
                    <Link to={'/courses/' + props.id} className='font-bold text-start  transition-colors duration-300 hover:text-primary'>
                        <span className='line-clamp-2'>{props.name}</span>
                    </Link>
                    <div className='mt-2 text-sm line-clamp-2 opacity-60 leading-6'>
                        {props.information}
                    </div>
                </div>
            </div>
            <div>
                <div className='text-sm font-normal flex items-center justify-between p-4 pt-0 text-slate-500 hover:text-primary transition-colors duration-300 '>
                    <Link to={'/teachers/' + props.teacher_id} className='flex items-center'>
                        <IoPersonCircleOutline className='text-lg' />
                        کبری صبوری مقدم
                    </Link>
                </div>
                <div className='border-t-2'>
                    <div className='py-2 px-4 lg:px-5 flex items-end justify-between'>
                        <div className='flex items-center text-slate-500'>
                            <LuClock4 />
                            <span className='ms-1 line-clamp-1'>{props.time}ساعت</span>
                        </div>
                        <div className='btn-outline-primary cursor-pointer flex gap-1'>
                            <span className='text-xs'>مطاله</span>
                            <ImArrowLeft />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;