import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import ProfileInfo from './ProfileInfo'
import { user } from '../store'
import profilePhoto from "../assets/profile.webp"
import { FaChevronDown, FaRegHeart } from 'react-icons/fa'
import profileIcon from "../assets/user icon.png"
import clockIcon from "../assets/clock icon.png"
import locationIcon from "../assets/carbon_location.png"
import helpIcon from "../assets/help icon.png"
import logoutIcom from "../assets/exit icon.png"
import { Link, useNavigate } from 'react-router-dom'
import { IoCartOutline, IoHomeOutline } from 'react-icons/io5'
import { LiaBookSolid } from "react-icons/lia";
import { setIndex } from '../store';
import { MdOutlineLogin } from 'react-icons/md'
import cart from "../assets/cart.png"
import heart from "../assets/heart.png"

export default function SideMenu() {
    const [index1, setIndex1] = useState()
    const { name, email, photo } = user()
    const nav = useNavigate()
    const { index } = setIndex()


    const Logout = () => {
        localStorage.removeItem("Token") || sessionStorage.removeItem("Token")
        nav("/")
    }
    return (
        <div>

            <IoMdMenu onClick={() => setIndex1(true)} className=' sm:block md:hidden text-white text-4xl' />
            {
                index1 ?
                    (<div onClick={() => setIndex1(false)} className='w-full fixed top-0 left-0 h-dvh bg-[#00000079]  '>
                        <div onClick={(event) => event.stopPropagation()} className='h-dvh w-75 left-0 fixed bg-white py-10 flex flex-col items-start px-3'>
                            <IoMdClose onClick={() => setIndex1(false)} className='absolute top-5 right-5 text-2xl cursor-pointer' />

                            <div className='flex flex-row gap-6 items-center justify-center hover:bg-[#ffffff17] rounded-lg cursor-pointer transition duration-200 p-1.5' >
                                <div className='flex flex-row gap-2.5 items-center'>
                                    <img className='h-10  rounded-[20px]' src={photo ? photo : profilePhoto} alt="" />
                                    <div className='flex flex-col gap-1'>
                                        <p className='font-semibold text-[16px] text-black'>{name}</p>
                                        <p className='text-black font-light text-[14px]'>{email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-85.5 p-6 flex flex-col gap-4  text-[#222222]'>
                                <Link onClick={() => setIndex1(false)} to={"/Profile"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                                    <img className='w-4.25 h-4.25' src={profileIcon} />
                                    <p className='font-semibold text-#222222 text-[16px]'>Profile</p>
                                </Link>
                                <Link onClick={() => setIndex1(false)} to={"/"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                                    <IoHomeOutline className='w-4.25 h-4.25' />
                                    <p className='font-semibold text-#222222 text-[16px]'>Home</p>
                                </Link>
                                <Link onClick={() => setIndex1(false)} to={"/Books"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                                    <LiaBookSolid className='w-4.25 h-4.25' />

                                    <p className='font-semibold text-#222222 text-[16px]'>Books</p>
                                </Link>

                                <Link onClick={() => setIndex1(false)} to={"/AboutUs"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                                    <img className='w-4.25 h-4.25' src={profileIcon} />
                                    <p className='font-semibold text-#222222 text-[16px]'>About Us</p>
                                </Link>
                                {
                                    index ? (
                                        <Link onClick={() => setIndex1(false)} to={"/Cart"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                                            <IoCartOutline className='text-xl' />

                                            <p className='font-semibold text-#222222 text-[16px]'>Cart</p>
                                        </Link>

                                    ) : null
                                }
                                {
                                    index ? (
                                        <Link onClick={() => setIndex1(false)} to={"/WhishList"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                                            <FaRegHeart />
                                            <p className='font-semibold text-#222222 text-[16px]'>Whish List</p>
                                        </Link>

                                    ) : null
                                }
                                <Link onClick={() => setIndex1(false)} to={"./"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                                    <img className='w-4.25 h-4.25' src={clockIcon} />
                                    <p className='font-semibold text-#222222 text-[16px]'>Order History</p>
                                </Link>
                                <Link onClick={() => setIndex1(false)} to={"/Profile"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                                    <img className='w-5 h-5' src={locationIcon} />
                                    <p className='font-semibold text-#222222 text-[16px]'>Address</p>
                                </Link>
                                <Link onClick={() => setIndex1(false)} to={"/Profile"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                                    <img className='w-4.25 h-4.25' src={helpIcon} />
                                    <p className='font-semibold text-#222222 text-[16px]'>Help</p>
                                </Link>
                                {
                                    index ? (
                                        <Link onClick={() => {
                                            Logout()
                                            setIndex1(false)
                                        }
                                        } to={"/Login"} className={`flex flex-row gap-2.5 w-full h-11.5 items-center `}>
                                            <img className='w-4.25 h-4.25' src={logoutIcom} />
                                            <p className='font-semibold text-#222222 text-[16px]'>Logout</p>
                                        </Link>
                                    ) : (<Link onClick={() => {
                                        Logout()
                                        setIndex1(false)
                                    }
                                    } to={"/Login"} className={`flex flex-row gap-2.5 w-full h-11.5 items-center `}>
                                        <MdOutlineLogin className='text-xl' />
                                        <p className='font-semibold text-#222222 text-[16px]'>Login</p>
                                    </Link>)
                                }

                            </div>
                        </div>
                    </div>) : null
            }
        </div>
    )
}
