import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import TeacherCard from '../Components/TeacherCard/TeacherCard'
import CourseCard from '../Components/CourseCard/CourseCard'
import CoursesDatas from '../Components/Datas/CoursesDatas'

export default function SingleTeacher() {

  let params = useParams();
  window.scroll(0,0)

  return (
    <>
      <NavBar />

      <div className='flex items-center justify-center '>
        <span className='text-3xl font-bold pb-2 before:bg-yellow-600 before:w-full before:h-[5px] relative before:absolute before:bottom-0 before:right-0 before:rounded-2xl'>دوره های دبیر</span>
      </div>

      <div className='flex flex-col md:flex-row gap-5 p-5 max-w-[1200px] mx-auto'>
        <div className='basis-3/12 flex flex-col gap-5'>
          <TeacherCard teacherID={params.teacherID} />
        </div>

        <div className='basis-9/12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {CoursesDatas.map(course => <CourseCard {...course}/>)}
        </div>
      </div>

      <Footer />
    </>
  )
}
