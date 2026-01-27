import React from 'react'
import Book from "../assets/book-bookmark 1.png"
import { NavLink } from 'react-router-dom'
import { FaChevronRight, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaEarthAfrica, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const linkClass =({ isActive }) => `text-[16px] hover:text-[#EAA451] duration-200  ${isActive  ? " text-[#EAA451]" : " text-[#ffffff]"}`
  return (
    <div className='min-h-92.5 bg-[#3B2F4A] w-full flex flex-col items-center justify-center'>
      <div className='container max-w-330 flex flex-row justify-between w-full '>
        <div className='flex flex-row items-center gap-10 '>
          <div className='flex flex-row items-center gap-[10.5px]'>
            <img className='text-[#FFFFFF] w-6 h-7.5' src={Book} alt="" />
            <p className='text-[#FFFFFF] font-sans text-[14px]'>Bookshop</p>
          </div>
          <div className='flex flex-row gap-6  '>
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to={"/Books"} className={linkClass}>Books</NavLink>
            <NavLink to={"/AboutUs"} className={linkClass}>About Us</NavLink>
          </div>
        </div>
        <div className='flex flex-row text-[#ffffff] text-2xl gap-6'>
          <FaFacebook className='hover:text-[#EAA451] duration-300 cursor-pointer' />
          <FaInstagram className='hover:text-[#EAA451] duration-300 cursor-pointer' />
          <FaYoutube className='hover:text-[#EAA451] duration-300 cursor-pointer' />
          <FaXTwitter className='hover:text-[#EAA451] duration-300 cursor-pointer' />
        </div>
      </div>
      <div className='container max-w-330 mt-4 mb-4 w-full'>
        <hr className='border text-[#ffffff2b]  w-full' />
      </div>
      <div className='container max-w-330 w-full flex flex-row justify-between'>
        <p className='text-[#ffffff]'>{"<Developed By> EraaSoft <All Copy Rights Reserved@2024"}</p>
        <div className='flex flex-row items-center justify-center gap-4'>
          <FaEarthAfrica className='text-2xl text-[#ffffff] hover:text-[#EAA451] duration-300 cursor-pointer' />
          <button className='bg-transparent outline-0 border flex flex-row rounded-lg gap-9.75 text-[#ffffff7a] items-center justify-center pl-4 pr-2 border-[#ffffff7b] w32 h-7.25'>English<FaChevronRight /></button>
        </div>

      </div>
    </div>
  )
}
