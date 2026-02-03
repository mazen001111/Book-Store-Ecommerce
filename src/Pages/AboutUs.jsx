import React from 'react'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"
import { FaArrowRightLong } from "react-icons/fa6";
import back from "../assets/back22.png"
import phone from "../assets/phone.png"
import message from "../assets/message.png"
import location from "../assets/mylocation.png"
import car from "../assets/car.png"
import card from "../assets/card.png"
import recycle from "../assets/recycle.png"
import sup from "../assets/support.png"
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from "yup"
import { MdOutlineEdit, MdOutlineMail } from "react-icons/md";
import { IoPersonOutline } from 'react-icons/io5';
import axios from 'axios';

export default function AboutUs() {

  let domain = "https://bookstore.eraasoft.pro/api"
  const endPoint = "/contacts/store";
  let url = domain + endPoint

  const submit = (values) => {
    let message ={name:values.name,email:values.email,subject:"",message:values.message}
    const apifetch = async () => {
      try {
        let res = await axios.post(url, message)
        console.log(res)
      } catch (error) {
        console.log(error?.response?.data)
      }
    }
    apifetch()
  }


  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name is too long")
      .required("Name is required"),

    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .required("Email is required"),

    message: Yup.string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message is too long")
      .required("Message is required"),
  });

  return (
    <div className='text-black pt-201 w-full mb-4'>
      <div className="w-full scale-x-[-1] z-10 overflow-hidden h-201 bg-cover bg-center bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
        <div className='flex flex-col gap-4 justify-center items-center w-full h-full bg-[#000000CC] scale-x-[-1]'>
          <div className='flex flex-col items-center gap-4 max-w-[90%] w-163'>
            <p className='text-[#FFFFFF] font-bold text-center text-3xl md:text-5xl'>About Bookshop</p>
            <p className='text-[#ffffff] text-xl md:text-2xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center py-30 min-h-167'>
        <div className='container max-w-282 flex flex-col items-center justify-center gap-20'>
          <p className='text-[#222222] font-bold text-4xl '>Our Mission</p>
          <div className='w-full place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='max-w-[90%] p-6 flex flex-col gap-6 items-start justify-center rounded-xl border border-[#22222233] bg-[#FFFFFF] '>
              <h1 className='text-[#222222] font-bold text-[22px]'>Quality section</h1>
              <p className='text-[#22222280] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality Selection Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>
              <p className='flex flex-row items-center gap-2 text-[#D9176C] text-[16px] cursor-pointer'>View More <FaArrowRightLong /></p>
            </div>
            <div className='max-w-[90%] p-6 flex flex-col gap-6 items-start justify-center rounded-xl border border-[#22222233] bg-[#FFFFFF] '>
              <h1 className='text-[#222222] font-bold text-[22px]'>Exceptional Service</h1>
              <p className='text-[#22222280] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality Selection Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>
              <p className='flex flex-row items-center gap-2 text-[#D9176C] text-[16px] cursor-pointer'>View More <FaArrowRightLong /></p>
            </div>
            <div className='max-w-[90%] p-6 flex flex-col gap-6 items-start justify-center rounded-xl border border-[#22222233] bg-[#FFFFFF] '>
              <h1 className='text-[#222222] font-bold text-[22px]'>Set Up Stores</h1>
              <p className='text-[#22222280] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality Selection Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>
              <p className='flex flex-row items-center gap-2 text-[#D9176C] text-[16px] cursor-pointer'>View More <FaArrowRightLong /></p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-197.5  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${back})` }}>
        <div className='bg-[#27153dc1] min-h-197.5 w-full flex justify-center'>
          <div className='w-full container max-w-333 flex flex-col items-center lg:flex-row px-5 gap-48 py-30'>
            <div className='flex flex-col gap-15 max-w-[90%] w-148'>
              <div className='flex flex-col w-full gap-4'>
                <h1 className='text-3xl md:text-[49px] font-bold text-[#ffffff]'>Have a Questions?
                  Get in Touch</h1>
                <p className='text-[#FFFFFF80] w-full text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
              </div>
              <Formik className="w-full" validationSchema={validationSchema} onSubmit={(values) => submit(values)} initialValues={{ name: "", email: "", message: "" }}>
                <Form className='w-full flex flex-col items-center  gap-4'>
                  <div className='w-full flex flex-col md:flex-row gap-4'>
                    <div className='flex-1 flex flex-col relative'>
                      <IoPersonOutline className='absolute left-2 top-5 text-[#FFFFFF80]' />
                      <Field name="name" type="text" placeholder="Your Name" className="w-full bg-transparent border border-[#FFFFFF80] outline-0 text-[16px] text-[#FFFFFF] px-7 h-14 rounded-lg" />
                      <ErrorMessage name="name" component="p" className="text-red-400 text-sm mt-1" />
                    </div>
                    <div className='flex-1 flex flex-col relative'>
                      <MdOutlineMail className='absolute left-2 top-4.5 text-[#FFFFFF80] text-xl' />
                      <Field name="email" type="email" placeholder="Your Email" className="w-full bg-transparent border border-[#FFFFFF80] outline-0 text-[16px] text-[#FFFFFF] px-7 h-14 rounded-lg" />
                      <ErrorMessage name="email" component="p" className="text-red-400 text-sm mt-1" />
                    </div>
                  </div>
                  <div className='flex flex-col w-full relative'>
                    <MdOutlineEdit className='absolute left-2 top-4.5 text-[#FFFFFF80]' />
                    <Field name="message" as="textarea" placeholder="Your Message" className=" w-full bg-transparent border border-[#FFFFFF80] outline-0 text-[16px] text-[#FFFFFF] px-7 py-3 rounded-lg h-32" />
                    <ErrorMessage name="message" component="p" className="text-red-400 text-sm mt-1" />
                  </div>
                  <button type="submit" className="bg-[#D9176C] w-50 text-white px-6 py-3 rounded-lg hover:bg-[#b01458] transition-colors">
                    Send Message
                  </button>
                </Form>
              </Formik>
            </div>
            <div className='flex flex-col w-[90%] lg:w-78 gap-6'>
              <div className='flex flex-row items-center gap-3 w-full'>
                <div className='bg-[#FFFFFF] flex justify-center items-center h-12 w-12 rounded-lg'>
                  <img src={phone} alt="" />
                </div>
                <p className='text-[#ffffff] text-lg'>01123456789</p>
              </div>
              <div className='flex flex-row items-center gap-3 w-full '>
                <div className='bg-[#FFFFFF] flex justify-center items-center h-12 w-12 rounded-lg'>
                  <img src={message} alt="" />
                </div>
                <p className='text-[#ffffff] text-lg'>Example@gmail.com</p>
              </div>
              <div className='flex flex-row items-center gap-3 w-full '>
                <div className='bg-[#FFFFFF] flex justify-center items-center h-12 w-12 rounded-lg'>
                  <img src={location} alt="" />
                </div>
                <p className='text-[#ffffff] text-lg w-full'>adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-101.75 flex justify-center items-center py-29.75'>
        <div className='container w-full max-w-320.75 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-15'>
          <div className='flex flex-col   max-w-[95%] gap-[17.25px]' >
            <img className='w-7.5' src={car} alt="" />
            <div className='flex flex-col gap-2'>
              <p className='w-full font-bold text-lg text-[#222222]'>Fast & Reliable Shipping</p>
              <p className='w-full text-[#22222280] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
          </div>
          <div className='flex flex-col max-w-[95%] gap-[17.25px]' >
            <img className='w-7.5' src={card} alt="" />
            <div className='flex flex-col gap-2 w-full'>
              <p className='w-full font-bold text-lg text-[#222222]'>Secure Payment</p>
              <p className='w-full text-[#22222280] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
          </div>
          <div className='flex flex-col  max-w-[95%] gap-[17.25px]' >
            <img className='w-7.5' src={recycle} alt="" />
            <div className='flex flex-col gap-2'>
              <p className='w-full font-bold text-lg text-[#222222]'>Easy Returns</p>
              <p className='w-full text-[#22222280] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
          </div>
          <div className='flex flex-col  max-w-[95%] gap-[17.25px]' >
            <img className='w-7.5' src={sup} alt="" />
            <div className='flex flex-col gap-2'>
              <p className='w-full font-bold text-lg text-[#222222]'>24/7 Customer Support</p>
              <p className='w-full text-[#22222280] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
