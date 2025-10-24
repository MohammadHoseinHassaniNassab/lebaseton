import React, { useState } from 'react'
import { FaHome, FaAddressCard, FaUser, FaSearch, FaBars } from "react-icons/fa";
import { BiSolidOffer, BiSupport } from "react-icons/bi";
import { RiBook3Fill } from "react-icons/ri";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import MobileNav from '../MobileNav/MobileNav';

export default function NavBar() {

  const [showModal, setShowModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <Modal setShowModal={setShowModal} showModal={showModal}/>
      <MobileNav showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav}/>
      <div className="w-full p-5 sticky top-0 right-0 z-10">
        <div className="w-full rounded-2xl bg-primary px-8 py-2 flex items-center gap-5 justify-between shadow-xl">
          <div className="flex items-center justify-center">
            <Link to='/' className="pe-6 lg:border-l-2 py-1 lg:border-white">
              <img src="./images/newest_logo_new-indigo.png" className="h-12" alt="" />
            </Link>
            <div className="hidden lg:flex ps-6">
              <nav className="flex items-center justify-center gap-x-10 text-white font-[600]">
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
          </div>

          <div className="flex items-center gap-4">
            <Link to={'/'} className="bg-white rounded-xl text-gray-400 text-2xl flex items-center justify-center p-2" >
              <FaUser className='mx' />
            </Link>
            <button type='button' className="bg-white rounded-xl text-gray-400 text-2xl hidden lg:flex items-center justify-center p-2" onClick={() => {  }}>
              <FaSearch />
            </button>
            <button type='button' className="bg-white rounded-xl text-gray-400 text-2xl lg:hidden flex items-center justify-center p-2" data-hs-overlay="#hs-overlay-backdrop-with-scrolling" onClick={() => { setShowMobileNav(!showMobileNav) }}>
              <FaBars className='mx-[2px]' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

