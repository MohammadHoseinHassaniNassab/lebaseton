import React from 'react'
import { useParams } from 'react-router-dom'
import CoursesDatas from '../Components/Datas/CoursesDatas';
import { FaMoneyBillWave } from "react-icons/fa6";
import Separate from '../Components/Separate/Separate';
import { HiMiniReceiptPercent } from "react-icons/hi2";
import logo from '../../public/images/final_logo_green.png';

export default function Buy() {
    let params = useParams();
    let selectedCourseID = params.courseID;
    let selectedCourse = CoursesDatas.find(course => course.id === selectedCourseID);
    let priceAfterOff = selectedCourse.price / 100 * (100 - selectedCourse.offer);

    return (
        <div className='h-screen w-screen flex items-center justify-center flex-col'>
            <div className='mb-28 flex items-center justify-between gap-x-5'>
                <img src={logo} className='size-14 rounded-2xl' alt="" />
                <h2 className='font-bold text-4xl'>صبوی مقدم</h2>
            </div>
            <div className='max-w-[400px] w-full relative'>
                <div className='px-12 absolute -bottom-20 z-10'>
                    <img src={selectedCourse.topic_image_location} alt="" className='rounded-3xl shadow-2xl' />
                </div>
            </div>
            <div className='max-w-[400px] w-full relative p-5 pt-0'>
                <div className='pt-24 px-5 pb-5 rounded-2xl bg-white flex flex-col gap-y-2.5'>
                    <div className='font-bold pt-2.5'>
                        {selectedCourse.name}
                    </div>
                    <div className='font-bold pt-2.5 flex flex-col border-t-1'>
                        <span>کد تخفیف دارید؟ آن را وارد کنید :</span>
                        <div className='flex gap-3 mt-3'>
                            <input type='text' placeholder='کد تخفیف :' className='text-sm outline-none bg-white border-2 rounded-lg border-slate-300 ps-2 py-2' />
                            <button className='btn-primary'>ثبت کد</button>
                        </div>
                    </div>
                    <div className='font-bold pt-2.5 border-t-1'>
                        <div className='flex items-center justify-between'>
                            <span className='flex items-center gap-x-2'>
                                <FaMoneyBillWave />
                                قیمت اصلی :
                            </span>
                            <span>
                                <Separate price={selectedCourse.price} />
                                تومان
                            </span>
                        </div>

                        <div className='flex items-center justify-between mt-2'>
                            <span className='flex items-center gap-x-2'>
                                <HiMiniReceiptPercent />
                                قیمت پس از تخفیف :
                            </span>
                            <span>
                                <Separate price={priceAfterOff} />
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className='font-bold pt-2.5 relative'>
                        <div className='border-t-4 border-dashed border-gray-100'></div>
                        <div className='size-6 bg-gray-100 rounded-full absolute top-0 -left-8'></div>
                        <div className='size-6 bg-gray-100 rounded-full absolute top-0 -right-8'></div>
                    </div>
                    <div className='font-bold pt-2.5 relative'>
                        <button className='btn-primary w-full'>ثبت و پرداخت</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
