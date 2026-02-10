import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Books from './Pages/Books'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Toaster } from 'react-hot-toast'
import ForgetPassword from './Pages/ForgetPassword'
import ResetCode from './Pages/ResetCode'
import AddCode from './Pages/AddCode'
import Profile from './Pages/Profile'
import WhishList from './Pages/WhishList'
import Cart from './Pages/Cart'
import ProductOverView from './Layout/ProductOverView'
import ProductDetails from './components/ProductDetails'
import CustomerReview from './components/CustomerReview'
import Recommended from './components/Recommended'

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

            <Route path='ProductOverView' element={<ProductOverView />}>
              <Route path='ProductDetails' element={<ProductDetails/>} />
              <Route path='Customer' element={<CustomerReview/>}/>
              <Route path='Recommended' element={<Recommended/>}/>
            </Route>

            <Route path='AboutUs' element={<AboutUs />} />
            <Route path='ForgetPassword' element={<ForgetPassword />} />
            <Route path='ResetCode' element={<ResetCode />} />
            <Route path='AddCode' element={<AddCode />} />
            <Route path='Profile' element={<Profile />} />
            <Route path='WhishList' element={<WhishList />} />
            <Route path='Cart' element={<Cart />} />
          </Route>
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
