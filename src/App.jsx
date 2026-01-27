import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Books from './Pages/Books'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <div className='w-full h-screen bg-[#F5F5F5]'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='Login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='Books' element={<Books />} />
            <Route path='AboutUs' element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
