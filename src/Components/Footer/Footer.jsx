import React from 'react'
import { FaTelegram, FaInstagram, FaTwitter } from "react-icons/fa";
import eNamad from '../../../public/images/e-namad.jpg';
import zarinPal from '../../../public/images/zarinpal.png';


export default function Footer() {
    return (
        <div className='p-5 lg:px-14 m-0 lg:m-5 rounded-2xl bg-primary text-white'>
            <div className='flex flex-wrap justify-center gap-y-8 '>
                <div className="text-start basis-full lg:basis-2/5 flex flex-col justify-between">
                    <h2 className='text-2xl mb-3 font-bold'>آموزشگاه لباستون</h2>
                    <p className='font-light text-slate-100 lg:pe-10'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    <div className='flex items-center justify-center lg:justify-start text-3xl mt-3 gap-x-2'>
                        <a href=''>
                            <FaTelegram />
                        </a>
                        <a href=''>
                            <FaInstagram />
                        </a>
                        <a href=''>
                            <FaTwitter />
                        </a>
                    </div>
                </div>
                <div className="basis-1/2 lg:basis-1/5 text-center">
                    <h2 className='text-2xl mb-3 font-bold'>لینک های مفید</h2>
                    <div className='flex flex-col justify-start mt-3 gap-2 text-sm font-light footer--nav'>
                        <a href=''>دوره نازک دوزی زنانه</a>
                        <a href=''>آموزش رنگ شناسی</a>
                        <a href=''>آموزش اندازه گیری</a>
                        <a href=''>دوره کار با چرخ صنعتی</a>
                        <a href=''>کار با نخ و سوزن</a>
                        <a href=''>دوره صفر تا استخدامی</a>
                    </div>
                </div>
                <div className="basis-1/2 lg:basis-1/5 text-center">
                <h2 className='text-2xl mb-3 font-bold'>جدید ترین مقالات</h2>
                    <div className='flex flex-col justify-start mt-3 gap-2 text-sm font-light footer--nav'>
                        <a href=''>مد در سال 1403</a>
                        <a href=''>جدید ترین نمونه کار ها </a>
                        <a href=''>نمونه کار های هنر جویان</a>
                        <a href=''>راهنمای انتخاب پارچه</a>
                        <a href=''>پارچه برای پالتو</a>
                    </div>
                </div>
                <div className="basis-1/2 lg:basis-1/5 flex items-center justify-around">
                    <a href='' className='w-5/12'><img src={eNamad} alt="" /></a>
                    <a href='' className='w-5/12'><img src={zarinPal} alt="" /></a>
                </div>
            </div>
            <div className='flex items-center justify-center font-bold text-sm text-center border-t mt-5 pt-3 mx-10'>
                <span>تمامی حقوق مادی و معنوی این سایت مربوط به اکادمی لباستون می باشد</span>
            </div>
        </div>
    )
}
