import React from 'react'
import { Link } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";

export default function TeacherCard(props) {
    let teacherID = props.teacherID;
    return (
        <div className='w-full flex flex-col gap-3 items-center rounded-2xl bg-slate-50 border-2 border-slate-200 p-5 sticky top-24 right-0'>
            <img src="https://mohammadhoseinhassaninassab.github.io/lebaseton/images/teacher_sabori.jpg" className='rounded-full w-16' alt="" />
            <Link className='font-[500] btn-outline-primary' to={'/teachers/' + teacherID}>
                <CiLogin />
                دوره های دبیر
            </Link>
            <h2 className='text-2xl font-bold'>کبری صبوری مقدم</h2>
            <p className='text-slate-500 text-center'>
                این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و کتابخونه ها، به دنیای داشبوردهای شگفت‌آور با HTML، CSS و JavaScript
            </p>
        </div>
    )
}
