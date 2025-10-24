import React from 'react'

export default function SubCommentCard() {
    return (
        <div className='mt-2 bg-gray-200 rounded-2xl p-5'>
            <div className='flex items-center gap-x-2'>
                <img src="../images/teacher_sabori.jpg" alt="" className='rounded-full w-12' />
                <h3 className='text-lg font-[500]'>کبری صبوری مقدم</h3>
            </div>
            <p className='ms-10 mt-5'>
                دوره بسیار عالی و کاملی بود هیچ جای دیگه همچین دوره ای با همچین قیمتی پیدا نمی کنید
            </p>
        </div>
    )
}
