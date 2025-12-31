import React, { useState } from "react";

import mousePosition from "../Components/mousePosition/mousePosition";

const Login = () => {
    const MP = mousePosition();

    return (
        <>
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="bg-white rounded-primary p-5">
                <div className="flex flex-col gap-3">
                    <label>شماره تلفن :</label>
                    <input type="text" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500" />
                    <button className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors">ورود به حساب کاربری</button>
                </div>
            </div>
        </div>
        </>
    )

}

export default Login;