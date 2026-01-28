import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"
export default function MainLayout() {
    return (
        <div className='flex flex-col w-full h-screen justify-between  bg-[#F5F5F5]'>

            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
