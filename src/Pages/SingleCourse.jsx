import React,{useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import CoursesDatas from '../Components/Datas/CoursesDatas';
import Separate from '../Components/Separate/Separate';
import TeacherCard from '../Components/TeacherCard/TeacherCard';
import CourseHeading from '../Components/CourseHeading/CourseHeading';
import CommentCard from '../Components/CommerntCard/CommentCard';
import { HiPlus } from "react-icons/hi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import placeholderCourseThumbnaul from '../assets/images/ims.svg'
import tomanSvg from '../../public/images/toman.svg';

export default function SingleCourse() {
  let params = useParams();
  let courses = CoursesDatas;
  let currentCourse = courses.find(course => course.id === params.courseID);
  let priceAfterOff = currentCourse.price / 100 * (100 - currentCourse.offer);
  let isLogin = true;

  window.scroll(0, 0)

  return (
    <>

      <NavBar />

      <div className='max-w-[1200px] mx-auto'>

        {/* ------------------------------------------------------------- */}

        {/* START course intro */}

        <div className='flex flex-col lg:flex-row-reverse gap-x-10 p-5'>
          <div className='basis-1/2 p-5 pb-0 flex items-center'>
            <img className='rounded-2xl' src={currentCourse.topic_image_location} alt="" />
          </div>

          <div className='basis-1/2 flex flex-col p-5 justify-center'>
            <h1 className='text-3xl font-[500] text-slate-900'>{currentCourse.name}</h1>
            <p className='text-slate-800 mt-10 line-clamp-4'>{currentCourse.information}</p>
            <div className='flex items-center justify-between mt-10'>
              {isLogin ? (<Link className='btn-primary px-5 text-xl font-[500]' to={'/Buy/' + params.courseID}>شرکت در دوره</Link>) : (<Link className='btn-primary px-5 text-xl font-[500]'>ورود</Link>)}

              <div className='flex flex-col-reverse items-center'>
                <span className='text-primary font-bold'>{(priceAfterOff !== 0) ? <span className='flex'><Separate price={priceAfterOff} /> <img src='../images/toman.svg' alt='تومن' /> </span> : "رایگان!"}</span>
                {currentCourse.offer ? <span className='text-slate-500 text-xs'><del><Separate price={currentCourse.price} /></del></span> : null}
              </div>
            </div>
          </div>
        </div>

        {/* END course intro */}

        {/* ---------------------------------------------------------------- */}

        <div className='flex flex-col md:flex-row gap-5 p-5'>
          <div className='basis-9/12 flex flex-col gap-5'>

            {/* --------------------------------------------------------------------------- */}

            {/* START course information */}
            <div className='rounded-2xl bg-slate-50 border-2 border-slate-200 p-5'>
              <div>
                <h2 className='relative text-2xl font-[500] after:h-full after:w-2 ps-3 after:bg-primary after:rounded-full after:absolute after:top-0 after:right-0 after:z-2'>توضیحات</h2>
                <div className='mt-5 text-zinc-700 line-clamp-[10]' dangerouslySetInnerHTML={{ __html: currentCourse.information }}></div>
              </div>
            </div>
            {/* END course information */}

            {/* --------------------------------------------------------------------------- */}

            {/* START course headings & episodes */}
            <div className='rounded-2xl bg-slate-50 border-2 border-slate-200 p-5'>
              <h2 className='relative text-2xl font-[500] after:h-full after:w-2 ps-3 after:bg-primary after:rounded-full after:absolute after:top-0 after:right-0 after:z-2'>سرفصل های دوره</h2>
              <CourseHeading headingID='1' />
            </div>
            {/* END course headings & episodes */}

            {/* ---------------------------------------------------------------------------- */}

            {/* START comments */}
            <div className='rounded-2xl bg-slate-50 border-2 border-slate-200 p-5'>
              <div className='flex items-center justify-between'>
                <h2 className='relative text-2xl flex gap-2 items-center font-[500] after:h-full after:w-2 ps-3 after:bg-primary after:rounded-full after:absolute after:top-0 after:right-0 after:z-2'>
                  <HiChatBubbleBottomCenterText />
                  نظرات
                </h2>
                <button className='btn-primary gap-1 peer'>
                  افزودن نظر
                  <HiPlus className='peer-hover:peer-odd:rotate-180 transition-all duration-700' />
                </button>
              </div>
              <div className='flex flex-col gap-y-5 mt-5'>
                <CommentCard />
              </div>
            </div>
            {/* END comments */}

            {/* ---------------------------------------------------------------------------- */}

          </div>
          <div className='basis-3/12'>
            <TeacherCard teacherID={currentCourse.teacher_id} />
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}


      </div>

      <Footer />
    </>
  )
}
