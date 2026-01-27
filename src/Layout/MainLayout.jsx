import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"
export default function MainLayout() {
    return (
        <div className='flex flex-col w-full h-screen justify-between pt-[400px] bg-[#F5F5F5]'>
            <div className="w-full scale-x-[-1] z-10 overflow-hidden h-95.75 bg-cover bg-center bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
                <div className='h-full w-full bg-[#00000099]'>

                </div>
            </div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
