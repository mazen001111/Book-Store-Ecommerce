import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { user } from "../store"
import profilePhoto from "../assets/profile.webp"


export default function Profile() {
    const nav = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem("Token") || sessionStorage.getItem("Token")
        if (!token) {
            toast.error("please Login first")
            nav("/Login")
        }
    }, [])

    const { FirstName, LastName, email, photo } = user()
console.log(email)
    const Submit = (values) => {

    }
    return (
        <div className='w-full flex flex-col justify-center items-center h-full pt-84.5'>
            <div className="w-full scale-x-[-1] z-10 overflow-hidden h-84.5 bg-cover bg-center  bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
                <div className='h-full w-full flex flex-col gap-6 bg-[#00000099] '>
                </div>
            </div>
            <img className='h-40  rounded-[80px] absolute top-70 z-20' src={photo ? photo : profilePhoto} alt="" />

            <Formik onSubmit={(values) => Submit(values)} initialValues={{ email:`${email}`, PhoneNumber: "012345678", Address: "Giza , faisal", FirstName: `${FirstName}`, LastName: `${LastName}`, Remember: false }}>
                <Form className='flex flex-col mb-10 gap-6 w-184 border border-[#22222233] max-w-[90%] mt-40 bg-[#FFFFFF] p-4 md:p-10 rounded-[20px] items-center'>
                    <h1 className='mb-10 text-[20px] font-semibold text-[#222222]'>General information</h1>
                    <div className='flex flex-col lg:flex-row w-full gap-4'>
                        <label className='w-full flex flex-col gap-2' htmlFor="FirstName">
                            <p className='text-[#22222280] font-openSans font-normal  text-[14px]' >First Name</p>
                            <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#222222] text-[16px] font-normal p-4" type="text" name="FirstName" autoComplete="First Name" />
                            <ErrorMessage name='FirstName' component={"p"} className='text-red-700' />
                        </label>
                        <label className='w-full flex flex-col gap-2'>
                            <p className='text-[#22222280] font-openSans font-normal  text-[14px]'>Last Name</p>
                            <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#222222] text-[16px] font-normal p-4" type="text" name="LastName" autoComplete="Last Name" />
                            <ErrorMessage name='LastName' component={"p"} className='text-red-700' />
                        </label>
                    </div>
                    <label className='w-full flex flex-col gap-2' htmlFor="email">
                        <p className='text-[#22222280] font-openSans font-normal  text-[14px]'>Email</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#222222] text-[16px] font-normal p-4" type="email" name="email" autoComplete="Email" />
                        <ErrorMessage name='email' component={"p"} className='text-red-700' />
                    </label>
                    <label className='w-full flex flex-col gap-2' >
                        <p className='text-[#22222280] font-openSans font-normal  text-[14px]'>Phone number</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#222222] text-[16px] font-normal p-4" type="text" name="PhoneNumber" autoComplete="PhoneNumber" />
                        <ErrorMessage name='PhoneNumber' component={"p"} className='text-red-700' />
                    </label>
                    <label className='w-full flex flex-col gap-2' htmlFor="Address">
                        <p className='text-[#22222280] font-openSans font-normal  text-[14px]'>Address</p>
                        <Field className="w-full bg-[#FFFFFF] border rounded-lg border-[#22222233] outline-0 h-12 text-[#222222] text-[16px] font-normal p-4" type="text" name="Address" autoComplete="Reenter the password" />
                        <ErrorMessage name='Address' component={"p"} className='text-red-700' />
                    </label>

                </Form>
            </Formik>
            <button type='submit' className='bg-[#D9176C] w-fit px-20 h-12 mb-81.5 rounded-lg cursor-pointer text-lg text-[#FFFFFF]'>Update information</button>

        </div>
    )
}
