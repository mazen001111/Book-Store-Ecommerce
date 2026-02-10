import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationLinks() {
    return (
        <div className='w-full flex flex-row max-[760px]:gap-5 gap-20 items-center justify-start border-b text-[26px] max-[760px]:text-[14px] max-[950px]:text-[20px] border-[#2222221A]'>
            <NavLink to={"./ProductDetails"} className={({isActive})=>`font-bold  min border-b-2 max-[760px]:pb-1 max-[950px]:pb-3  pb-6 + ${isActive ? "text-black border-[#EAA451]" : "text-[#22222280]  border-transparent"} `}>Product Details</NavLink>
            <NavLink to={"./Customer"} className={({isActive})=>`font-bold  pb-6 border-b-2 max-[760px]:pb-1 max-[950px]:pb-3 + ${isActive ?  "text-black border-[#EAA451]" : "text-[#22222280]  border-transparent"} `}>Customer Reviews</NavLink>
            <NavLink to={"./Recommended"} className={({isActive})=>`font-bold  pb-6 border-b-2 max-[760px]:pb-1 max-[950px]:pb-3 + ${isActive ?  "text-black border-[#EAA451]" : "text-[#22222280]  border-transparent"} `}>Recomended For You</NavLink>
        </div>
    )
}
