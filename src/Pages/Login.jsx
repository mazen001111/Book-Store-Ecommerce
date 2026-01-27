import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
    const nav =useNavigate()
    let domain = "https://bookstore.eraasoft.pro/api"
    let endPoint = "/login"
    let url = domain + endPoint
    const submit = (values) => {
        let data = { email: values.identifier, password: values.password }
        axios.post(url, data).then((res) => { 
            console.log(res.data.data) 
            nav("/")
        }).catch((err) => { console.log(err) })
    }
    const validationSchema = Yup.object({
        identifier: Yup.string("please enter a valid email").required("email is a required field").email("please enter a valid email"),
        password: Yup.string().required()
    })
    return (
        <div className='w-full flex justify-center flex-col items-center gap-10 mb-111.25   mt-15'>
            <Formik validationSchema={validationSchema} onSubmit={(values) => submit(values)} initialValues={{ identifier: "", password: "", Remember: false }}>
                <Form className='flex flex-col gap-6 w-xl items-center'>
                    <h1 className='font-openSans mb-4 font-semibold text-[#D9176C]'>Welcome Back!</h1>
                    <label className='w-full flex flex-col gap-2' htmlFor="email">
                        <p className='text-[#222222] font-openSans font-semibold  text-[18px]'>Email</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#22222280] text-[16px] font-normal p-4" type="email" name="identifier" placeholder="example@gmail.com" />
                        <ErrorMessage name='identifier' component={"p"} className='text-red-700' />
                    </label>
                    <label className='w-full flex flex-col gap-2' htmlFor="password">
                        <p className='text-[#222222] font-openSans font-semibold text-lg'>password</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#22222280] text-[16px] font-normal p-4" type="password" name="password" placeholder="Enter password" />
                        <ErrorMessage name='password' component={"p"} className='text-red-700' />
                    </label>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <label className='flex flex-row justify-center gap-2 -mt-2 items-center' htmlFor="Remember">
                            <Field className="" name="Remember" type="checkbox" />
                            <p className='text-[#222222] font-openSans font-normal text-[14px]'>Remember me</p>
                        </label>
                        <Link className='text-[#D9176C] text-[16px] '>Forget password?</Link>
                    </div>
                    <button type='submit' className='bg-[#D9176C] w-full h-12 rounded-lg cursor-pointer text-lg text-[#FFFFFF]' >Log in</button>
                </Form>
            </Formik>
            <div>
                <p className='text-[#222222] text-lg'>Don't have account? <Link className='cursor-pointer text-lg text-[#D9176C] font-semibold ' to={"/Signup"}>Signup</Link></p>
            </div>
            <div className='flex flex-col gap-6 w-xl '>
                <button className='bg-[#FFFFFF] shadow-xl w-full h-11.5 rounded-lg text-[14px] flex flex-row justify-center gap-2.5 items-center text-[#222222] cursor-pointer'><FcGoogle className='h-5 w-5' /> Login with Google</button>
                <button className='bg-[#FFFFFF] shadow-xl w-full h-11.5 rounded-lg text-[14px] flex flex-row justify-center gap-2.5 items-center text-[#222222] cursor-pointer'><FaFacebook className='text-[#1877F2] w-5 h-5' /> Login with Facebook</button>
            </div>
        </div>
    )
}
