import React from 'react'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaHome, FaAddressCard } from "react-icons/fa";
import { BiSolidOffer, BiSupport } from "react-icons/bi";
import { RiBook3Fill } from "react-icons/ri";
import { BsFillPlayBtnFill } from "react-icons/bs";

export default function MobileNav({ showMobileNav, setShowMobileNav }) {

    return (
        <>
            <div className={`fixed right-0 top-0 w-1/2 flex flex-col bg-primary opacity-95 h-screen z-50 shadow-2xl shadow-black transition-transform ${showMobileNav ? 'translate-x-0' : 'translate-x-full'} `}>
                <div className='ms-auto p-5'>
                    <span className='font-bold text-2xl text-white cursor-pointer' onClick={() => { setShowMobileNav(!showMobileNav) }}>
                        <IoMdClose />
                    </span>
                </div>
                <nav className="flex flex-col items-center justify-center gap-5 text-white font-[600] mt-28">
                    <Link to="/" className="public-nav">
                        <FaHome className='text-xl' />
                        خانه
                    </Link>
                    <Link to="/" className="public-nav">
                        <BsFillPlayBtnFill className='text-xl' />
                        دوره ها
                    </Link>
                    <Link hrefto="/" className="public-nav">
                        <BiSolidOffer className='text-2xl' />
                        <div className="relative pe-5">
                            <span> آموزش های </span>
                            <span className="bg-red-900 shadow-red-950 shadow-2xl rounded-full px-2 absolute -rotate-45 -left-6">رایگان</span>
                        </div>
                    </Link>
                    <Link to="/about" className="public-nav">
                        <FaAddressCard className='text-xl' />
                        درباره ما
                    </Link>
                    <Link to="/support" className="public-nav">
                        <BiSupport className='text-xl' />

                        پشتیبانی
                    </Link>
                    <Link to="/blog" className="public-nav">
                        <RiBook3Fill className='text-xl' />

                        مقالات وبلاگ
                    </Link>
                </nav>
            </div>
        </>
    )
}
