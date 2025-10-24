import React from 'react';
import { LuClock4 } from 'react-icons/lu';
import { IoPersonCircleOutline } from 'react-icons/io5';
import Separate from '../Separate/Separate';
import { Link } from 'react-router-dom';

function CourseCard(props) {
    let priceAfterOff = props.price / 100 * (100 - props.offer);
    return (
        <div className='flex flex-col relative flex-grow bg-white rounded-xl transition-all duration-500 justify-between gap-y-8' href='#'>
            {props.offer ? <span className="rounded-full bg-primary font-thin text-sm text-white absolute top-2 left-2 p-2 h-6 w-12 flex items-center justify-center shadow-2xl">{props.offer}%</span> : null}
            <div className='flex flex-col gap-y-2'>
                <div className=''>
                    <Link to={'/courses/' + props.id} className='w-full mb-3 lg:mb-0 rounded-xl flex justify-center bg-white overflow-hidden'>
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
                        <div className='flex flex-col-reverse items-center'>
                            <span className='text-primary font-bold'>{(priceAfterOff !== 0) ? <span className='flex'><Separate price={priceAfterOff} /> <img src='./images/toman.svg' alt='.'/> </span> : "رایگان!"}</span>
                            {props.offer ? <span className='text-slate-500 text-xs'><del><Separate price={props.price} /></del></span> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;