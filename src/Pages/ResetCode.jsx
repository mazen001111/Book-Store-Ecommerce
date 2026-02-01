import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import toast from 'react-hot-toast'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"

export default function ResetCode() {
    const nav = useNavigate()
    let domain = "https://bookstore.eraasoft.pro/api"
    let endPoint = "/forget-password"
    let url = domain + endPoint
    const submit = async (values) => {
        const Forget = async () => {
            try {
                let res = await axios.post(url, values)
                toast.success(res.data.message)
                console.log(res)
                nav("/AddCode")
            } catch (error) {
                console.log(error?.response)
            }
        }
        Forget()
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
            <Formik validationSchema={validationSchema} onSubmit={(values) => submit(values)} initialValues={{ email: "", }}>
                <Form className='flex flex-col gap-10 max-w-[90%] w-xl items-center'>
                    <div className='w-full h-fit flex flex-col gap-4'>
                        <h1 className='text-center font-openSans font-semibold text-[#D9176C]'>Create new Password</h1>
                        <p className='text-center text-[#22222280] w-full text-[14px]'>Create a strong password</p>
                        <p className='text-center text-[#22222280] w-full text-[14px] -mt-2'>Your new password must be different from previous one</p>
                    </div>
                    <label className='w-full flex flex-col gap-2' htmlFor="password">
                        <p className='text-[#222222] font-openSans font-semibold text-lg'>password</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#22222280] text-[16px] font-normal p-4" type="password" name="password" placeholder="Enter password" autoComplete="password" />
                        <ErrorMessage name='password' component={"p"} className='text-red-700' />
                    </label>
                    <label className='w-full flex flex-col gap-2' htmlFor="confirmPassword">
                        <p className='text-[#222222] font-openSans font-semibold text-lg'>confirm password</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#22222280] text-[16px] font-normal p-4" type="password" name="confirmPassword" placeholder="Enter password" autoComplete="Reenter the password" />
                        <ErrorMessage name='confirmPassword' component={"p"} className='text-red-700' />
                    </label>
                    <label className='flex flex-row w-full gap-2 -mt-2'>
                        <Field className="" name="Remember" type="checkbox" />
                        <p className='text-[#222222] font-openSans font-normal text-[14px]'>Remember me</p>
                    </label>
                    <button type='submit' className='bg-[#D9176C] w-full h-12 rounded-lg cursor-pointer text-lg text-[#FFFFFF]' >Reset Password</button>
                </Form>
            </Formik>

        </div>
    )
}
