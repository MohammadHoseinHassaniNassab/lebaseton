import React from 'react'
import SubCommentCard from '../SubCommentCard/SubCommentCard'
import { BsFillReplyFill } from "react-icons/bs";

export default function CommentCard() {
  return (
    <div className='mt-2 bg-gray-100 rounded-2xl p-5'>
      <div className='flex items-center gap-x-2'>
        <img src="../images/teacher_sabori.jpg" alt="" className='rounded-full w-12' />
        <h3 className='text-lg font-[500]'>کبری صبوری مقدم</h3>
        <span className='rounded-full hover:bg-slate-300 p-2 text-2xl ms-auto cursor-pointer transition-colors duration-300'>
        <BsFillReplyFill />
        </span>
      </div>
      <p className='ms-10 mt-5'>
        دوره بسیار عالی و کاملی بود هیچ جای دیگه همچین دوره ای با همچین قیمتی پیدا نمی کنید
      </p>
      <div className='mt-10 ms-10'>
        <SubCommentCard />
      </div>
    </div>
  )
}
