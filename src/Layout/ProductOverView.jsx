import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationLinks from '../components/NavigationLinks'
import Details from '../components/Details'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"

export default function ProductOverView() {
    return (
        <div className='min-h-dvh h-full bg-[#f5f5f5] w-full flex justify-center items-center  pt-29.75'>
            <div className="w-full scale-x-[-1] z-10 overflow-hidden h-29.75 bg-cover bg-center  bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
                <div className='h-full w-full flex flex-col gap-6 bg-[#00000099] '>
                </div>
            </div>
            <div className='flex flex-col gap-17.5 justify-center items-center w-full h-full max-[760px]:px-5 px-10 mb-10 container max-w-333'>
                <Details />
                <NavigationLinks />
                <Outlet />
            </div>
        </div>
    )
}
