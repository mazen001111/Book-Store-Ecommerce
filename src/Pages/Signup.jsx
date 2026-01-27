import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import toast from 'react-hot-toast'

export default function Signup() {
    let domain = "https://bookstore.eraasoft.pro/api"
    let endPoint = "/register"
    let url = domain + endPoint
    const nav=useNavigate()
    const submit = (values) => {

            axios.post(url, {
                first_name: values.FirstName,
                last_name: values.LastName,
                email: values.email,
                password: values.password,
                password_confirmation: values.confirmPassword,
            }).then((res) => {
                console.log(res)
                nav("/Login")
                toast.success("signup success")
            }).catch((err) => {
                 console.log(err);
                 toast.error(err.response.data.error.message)
            })
        
    }
    const validationSchema = Yup.object({
        FirstName: Yup.string().required("First name is required"),
        LastName: Yup.string().required("Last name is required"),
        email: Yup.string().required("Email is required").email("Invalid email"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm password is required"),
    });
    return (
        <div className='w-full flex justify-center flex-col items-center gap-10 mb-71.5 mt-15'>
            <Formik validationSchema={validationSchema} onSubmit={(values) => submit(values)} initialValues={{ email: "", password: "", confirmPassword: "", FirstName: "", LastName: "", Remember: false }}>
                <Form className='flex flex-col gap-6 w-xl items-center'>
                    <div className='flex flex-row w-full gap-4'>
                        <label className='w-full flex flex-col gap-2' htmlFor="FirstName">
                            <p className='text-[#222222] font-openSans font-semibold  text-[18px]'>First Name</p>
                            <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#22222280] text-[16px] font-normal p-4" type="text" name="FirstName" placeholder="John" />
                            <ErrorMessage name='FirstName' component={"p"} className='text-red-700' />
                        </label>
                        <label className='w-full flex flex-col gap-2' htmlFor="LastName">
                            <p className='text-[#222222] font-openSans font-semibold  text-[18px]'>Last Name</p>
                            <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#22222280] text-[16px] font-normal p-4" type="text" name="LastName" placeholder="Smith" />
                            <ErrorMessage name='LastName' component={"p"} className='text-red-700' />
                        </label>
                    </div>
                    <label className='w-full flex flex-col gap-2' htmlFor="email">
                        <p className='text-[#222222] font-openSans font-semibold  text-[18px]'>Email</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#22222280] text-[16px] font-normal p-4" type="email" name="email" placeholder="example@gmail.com" />
                        <ErrorMessage name='email' component={"p"} className='text-red-700' />
                    </label>
                    <label className='w-full flex flex-col gap-2' htmlFor="password">
                        <p className='text-[#222222] font-openSans font-semibold text-lg'>password</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#22222280] text-[16px] font-normal p-4" type="password" name="password" placeholder="Enter password" />
                        <ErrorMessage name='password' component={"p"} className='text-red-700' />
                    </label>
                    <label className='w-full flex flex-col gap-2' htmlFor="confirmPassword">
                        <p className='text-[#222222] font-openSans font-semibold text-lg'>confirm password</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#22222280] text-[16px] font-normal p-4" type="password" name="confirmPassword" placeholder="Enter password" />
                        <ErrorMessage name='confirmPassword' component={"p"} className='text-red-700' />
                    </label>
                    <label className='flex flex-row w-full justify-start gap-2 -mt-2 items-center' htmlFor="Remember">
                        <Field className="" name="Remember" type="checkbox" />
                        <p className='text-[#222222] font-openSans font-normal text-[14px]'>Agree with <Link className='cursor-pointer text-[14px] text-[#D9176C] font-medium '>Terms & conditions</Link></p>
                    </label>
                    <button type='submit' className='bg-[#D9176C] w-full h-12 rounded-lg cursor-pointer text-lg text-[#FFFFFF]' >Sign up</button>
                </Form>
            </Formik>
            <div>
                <p className='text-[#222222] text-lg'>Already have an account? <Link className='cursor-pointer text-lg text-[#D9176C] font-semibold ' to={"/Login"}>Login</Link></p>
            </div>
            <div className='flex flex-col gap-6 w-xl '>
                <button className='bg-[#FFFFFF] shadow-xl w-full h-[46px] rounded-lg text-[14px] flex flex-row justify-center gap-2.5 items-center text-[#222222] cursor-pointer'><FcGoogle className='h-5 w-5' /> Login with Google</button>
                <button className='bg-[#FFFFFF] shadow-xl w-full h-[46px] rounded-lg text-[14px] flex flex-row justify-center gap-2.5 items-center text-[#222222] cursor-pointer'><FaFacebook className='text-[#1877F2] w-5 h-5' /> Login with Facebook</button>
            </div>
        </div>
    )
}
