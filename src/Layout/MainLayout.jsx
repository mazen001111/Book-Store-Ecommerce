import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"
export default function MainLayout() {
    return (
        <div className='flex flex-col w-full h-screen justify-between relative'>
            <div className="absolute inset-0 w-full h-full overflow-hidden -z-10"
                style={{ backgroundImage: `url(${Library})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
