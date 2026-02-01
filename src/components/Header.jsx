import React, { useEffect, useState } from 'react'
import { PiLineVertical, PiLineVerticalThin } from "react-icons/pi";
import BookMark from "../assets/book-bookmark 1.png"
import { Link, NavLink, useLocation } from 'react-router-dom';
import Book from "../assets/book-bookmark 1.png"
import { IoMdMenu } from 'react-icons/io';
import { setIndex } from '../store';
import ProfileInfo from './ProfileInfo';
import SideMenu from './SideMenu';

export default function Header() {
    const linkClass = ({ isActive }) => `text-[16px] hover:text-[#EAA451] duration-200  ${isActive ? " text-[#EAA451]" : " text-[#ffffff]"}`
    const { index, indexFalse, indexTrue } = setIndex()
    const token = localStorage.getItem("Token") || sessionStorage.getItem("Token")
    const location = useLocation()
    const [sideMenuIndex, setsideMenuIndex] = useState(false)

    const toggle = () => {
        if (sideMenuIndex) {
            setsideMenuIndex(false)
        } else {
            setsideMenuIndex(true)
        }
    }

    useEffect(() => {
        if (token) {
            indexTrue()
        } else {
            indexFalse()
        }
    }, [location])
    return (
        // bg-[#FFFFFF33] 
        <div className='w-full h-15 md:h-23  flex justify-center items-center py-6 px-7 lg:px-35 bg-[#FFFFFF33] z-30 top-0 absolute '>
            <div className='container w-full min-w-90% max-w-290 flex flex-row justify-between'>
                <div className='flex flex-row justify-between md:justify-center w-full md:w-fit items-center gap-6 '>
                    <div className='flex flex-row items-center gap-2'>
                        <img className='text-[#FFFFFF] w-6.75 h-8' src={Book} alt="" />
                        <p className='text-[#FFFFFF] font-sans text-[16px]'>Bookshop</p>
                    </div>
                    <PiLineVertical className='hidden md:flex text-[#FFFFFF4D] h-8' />
                    <SideMenu/>
                    <div className=' hidden md:flex flex-row gap-6  '>
                        <NavLink to="/" className={linkClass}>Home</NavLink>
                        <NavLink to={"/Books"} className={linkClass}>Books</NavLink>
                        <NavLink to={"/AboutUs"} className={linkClass}>About Us</NavLink>
                    </div>
                </div>
                {
                    index ?
                        <ProfileInfo /> :
                        (<div className='hidden md:flex flex-row gap-3'>
                            <Link to="/Login" className='w-19.75 h-11 flex justify-center items-center rounded-lg font-semibold text-[#ffffff] text-lg transition duration-300 bg-[#D9176C] hover:text-[#D9176C]  hover:bg-[#ffffff]'>Login</Link>
                            <Link to="/Signup" className='w-19.75 h-11 flex justify-center items-center rounded-lg border border-[#D9176C] font-semibold text-[#D9176C] text-lg transition duration-300 bg-[#ffffff] hover:text-[#ffffff]  hover:bg-[#D9176C]'>Signup</Link>
                        </div>)
                }

            </div>
        </div>
    )
}
