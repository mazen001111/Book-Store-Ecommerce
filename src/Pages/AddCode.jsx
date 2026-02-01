import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"

export default function AddCode() {
    const nav = useNavigate()
    let domain = "https://bookstore.eraasoft.pro/api"
    let endPoint = "/forget-password"
    let url = domain + endPoint
console.log(url)
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef([]);

    const handleChange = (e, i) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[i] = value;
        setOtp(newOtp);

        if (value && i < 3) {
            inputs.current[i + 1].focus();
        }
    };


    const submit = async (values) => {
        nav("/ResetCode")
        console.log(values)
    }
    const validationSchema = Yup.object({
        email: Yup.string("please enter a valid email").required("email is a required field").email("please enter a valid email"),
    })
    return (
        <div className='w-full flex justify-center flex-col items-center gap-10 mb-111.25 pt-100  mt-15'>
            <div className="w-full scale-x-[-1] z-10 overflow-hidden h-95.75 bg-cover bg-center bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
                <div className='h-full w-full bg-[#00000099]'>
                </div>
            </div>
            <Formik validationSchema={validationSchema} onSubmit={(values) => submit(values)} >
                <Form className='flex flex-col gap-10 max-w-[90%] w-120 items-center'>
                    <div className='w-full h-fit flex flex-col gap-4'>
                        <h1 className='text-center font-openSans font-semibold text-[#D9176C]'>Reset your Password!</h1>
                        <p className='text-center text-[#22222280] w-full text-[14px]'>Enter the 4 dights code that you received on your email</p>
                    </div>
                    <label className='max-w-full w-78 flex flex-col gap-2' htmlFor="email">
                        <p className='text-[#222222] font-openSans font-semibold mb-3  text-[18px]'>Email</p>
                        <div className="w-full flex gap-3">
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    ref={(el) => (inputs.current[i] = el)}
                                    value={digit}
                                    maxLength={1}
                                    onChange={(e) => handleChange(e, i)}
                                    className="h-14 w-full rounded-xl border-2  border-gray-300 text-center text-xl font-medium outline-none  focus:border-blue-500  focus:ring-2  focus:ring-blue-200"
                                />
                            ))}
                        </div>
                    </label>
                    <button onClick={()=>nav("/ResetCode")} type='submit' className='bg-[#D9176C] max-w-full w-78 h-12 rounded-lg cursor-pointer text-lg text-[#FFFFFF]' >Send reset code</button>
                    <p className='text-[#222222] text-[16px] font-normal'>Didn’t receive a code? <Link className='text-[#D9176C] font-semibold'>Send again</Link></p>
                </Form>
            </Formik>

        </div>
    )
}
