import React from 'react'
import { PiLineVerticalThin } from "react-icons/pi";
import BookMark from "../assets/book-bookmark 1.png"
export default function Header() {
    return (
        // bg-[#FFFFFF33] 
        <div className='flex flex-between'>
            <div className='flex flex-row'>
                <img className='text-white' src={BookMark} alt="" />
                <div className='flex flex-row'>

                </div>
                <PiLineVerticalThin />

            </div>
            <div></div>
        </div>
    )
}
