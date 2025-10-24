import React from 'react'
import { IoMdClose } from "react-icons/io";

export default function Modal({ showModal, setShowModal }) {

  return (
    <div className={`bg-black/20 fixed top-0 right-0 w-full h-screen z-50 flex items-center justify-center transition-transform ${showModal ? 'scale-100' : 'scale-0'}`}>
      <div className='p-5 rounded-2xl bg-white flex flex-col gap-2'>
        <div className='text-2xl' onClick={() => { setShowModal(!showModal) }}><IoMdClose /></div>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-center'>
            <img src="../images/final_logo_green.png" className="size-12 rounded-2xl" alt="" />
            <span className='font-bold text-3xl'>لِباسِتون</span>
          </div>
          <div className='flex gap-2' dir='ltr'>
            <span className='p-2 bg-slate-200 rounded-xl'>+98</span>
            <input placeholder='شماره تلفن خود را وارد کنید' type='number' className='p-2 outline-none border-slate-400 border-2 rounded-xl font-bold' />
          </div>
          <button className='btn-primary'>ورود</button>
        </div>
      </div>
    </div>
  )
}
