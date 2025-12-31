import React from 'react'

export default function SubCommentCard() {
    return (
        <div className='mt-2 bg-gray-200 rounded-2xl p-5'>
            <div className='flex items-center gap-x-2'>
                <img src="https://github.com/MohammadHoseinHassaniNassab/lebaseton/blob/main/src/assets/images/user-3296.png?raw=true" alt="" className='rounded-full w-12' />
                <h3 className='text-lg font-[500]'>علی محمدی</h3>
            </div>
            <p className='ms-10 mt-5'>
                دوره بسیار عالی و کاملی بود هیچ جای دیگه همچین دوره ای با همچین قیمتی پیدا نمی کنید
            </p>
        </div>
    )
}
