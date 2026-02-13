import React, { useState } from 'react'
import { FaChevronDown, FaRegHeart } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import cart from "../assets/cart.png"
import heart from "../assets/heart.png"
import { useNavigate } from 'react-router-dom'
import {user } from '../store'
import profilePhoto from "../assets/profile.webp"
import SmallMenu from './SmallMenu'
export default function ProfileInfo() {
    const nav = useNavigate()
    const [index, setIndex] = useState(false)
    const toggle = () => {
        if (index) {
            setIndex(false)
        } else {
            setIndex(true)
        }
    }
    const { name, email, photo } = user()
    return (
        <div className='w-fit hidden md:flex flex-row gap-6 items-center justify-center'>
            <img className='cursor-pointer' onClick={() => nav("/WhishList")} src={heart} alt="" />
            <img className='cursor-pointer' onClick={() => nav("/Cart")} src={cart} alt="" />
            <div className='w-fit relative'>
                <div className='flex flex-row gap-6 items-center justify-center hover:bg-[#ffffff17] rounded-lg cursor-pointer transition duration-200 p-1.5' onClick={() => toggle()}>
                    <div className='flex flex-row gap-2.5 items-center'>
                        <img className='h-10  rounded-[20px]' src={photo ? photo : profilePhoto} alt="" />
                        <div className='flex flex-col gap-1'>
                            <p className='font-semibold text-[16px] text-[#ffffff]'>{name}</p>
                            <p className='text-[#FFFFFF80] font-light text-[14px]'>{email}</p>
                        </div>
                    </div>
                    <FaChevronDown className='h-5 w-5 text-[#ffffff]'/>
                </div>
            {
                index ?
                    (<div onClick={()=>toggle()} className='absolute top-25 right-2 transition-all duration-200 $translate-6'>
                        <SmallMenu />
                    </div>) : null

            }
            </div>
        </div>
    )
}
