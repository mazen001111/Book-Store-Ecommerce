import React from 'react'
import profileIcon from "../assets/user icon.png"
import clockIcon from "../assets/clock icon.png"
import locationIcon from "../assets/carbon_location.png"
import helpIcon from "../assets/help icon.png"
import logoutIcom from "../assets/exit icon.png"
import { Link, useNavigate } from 'react-router-dom'
export default function SmallMenu() {
    const nav=useNavigate()
    const Logout =()=>{
        localStorage.removeItem("Token")||sessionStorage.removeItem("Token")
        nav("/")
    }
    return (
        <div className='w-70 bg-[#FFFFFF] h-85.5 p-6 flex flex-col gap-4 rounded-[8px] text-[#222222]'>
            <Link to={"/Profile"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                <img className='w-4.25 h-4.25' src={profileIcon} />
                <p className='font-semibold text-#222222 text-[16px]'>Profile</p>
            </Link>
            <Link to={"./"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                <img className='w-4.25 h-4.25' src={clockIcon} />
                <p className='font-semibold text-#222222 text-[16px]'>Order History</p>
            </Link>
            <Link to={"/Profile"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                <img className='w-4.25 h-4.25' src={locationIcon} />
                <p className='font-semibold text-#222222 text-[16px]'>Address</p>
            </Link>
            <Link to={"/Profile"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                <img className='w-4.25 h-4.25' src={helpIcon} />
                <p className='font-semibold text-#222222 text-[16px]'>Help</p>
            </Link>
            <Link onClick={()=>Logout()} to={"/Login"} className='flex flex-row gap-2.5 w-full h-11.5 items-center'>
                <img className='w-4.25 h-4.25' src={logoutIcom} />
                <p className='font-semibold text-#222222 text-[16px]'>Logout</p>
            </Link>

        </div>
    )
}
