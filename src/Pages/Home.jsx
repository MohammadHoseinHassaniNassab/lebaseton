import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import CourseCard from '../Components/CourseCard/CourseCard'
import CoursesDatas from '../Components/Datas/CoursesDatas'
import { RiArrowLeftSLine } from "react-icons/ri";
export default function Home() {
    let courses = CoursesDatas;
    
    return (
        <>
            <NavBar />
            <div className="w-full p-5">
                <div className="w-full grid lg:grid-cols-2 grid-cols-1 text-center">
                    <div className="flex items-start justify-centenpx tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css --watchr">
                        <img src="https://mohammadhoseinhassaninassab.github.io/lebaseton/images/main-img.png" className="w-full p-20" alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center lg:px-20 p-4 gap-7 font-medium">
                        <div className="text-4xl font-bold">
                            <span className="text-primary">لِباسِتون ،</span>
                            آموزشگاه اختصاصی شما
                        </div>
                        <p className="text-xl font-normal">
                            در اکادمی لباستون ما برای افراد مبتدی و بدون هیج گونه دانش قبلی درباده خیاطی ، نقشه راه و طرح درس به صورت رایگان رائه میکنیم. شما با کلیک روی دکمه زیر میتوانید نقشه راه مختص خود را دریافت کنید
                        </p>
                        <button type='button' className="btn-primary text-xl w-full lg:w-96 flex items-center justify-center gap-x-1">
                            مشاهده نقشه راه
                            <RiArrowLeftSLine />
                        </button>
                    </div>
                </div>
            </div>

            {/* start blogs section */}
            
            {/* end blogs section */}

            {/* start courses section */}
            <div className='main w-full container max-w-[1200px]  px-5 md:px-3 lg:p0 mx-auto' id='courses '>
                <div className='relative before:absolute before:w-2 before:h-10 before:top-0 before:right-0 before:bg-yellow-600 before:rounded-2xl ps-5 flex flex-col'>
                    <span className='font-bold text-3xl '>دوره های برتر</span>
                    <span className='opacity-50 text-lg font-light'>منتخب سر دبیر</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                    {courses.map(course => <CourseCard key={course.id} {...course} />)}

                    {(courses.reverse()).map((course) => (
                        <CourseCard key={course.id} {...course} />  
                    ))}
                </div>
            </div>
            {/* end courses section */}
            <Footer />
        </>
    )
}