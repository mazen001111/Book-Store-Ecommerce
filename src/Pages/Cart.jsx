import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"
import CartItems from '../components/CartItems'
import { addCart } from '../store'
export default function Cart() {
  const nav = useNavigate()
  const { items } = addCart()

  useEffect(() => {
    let token = localStorage.getItem("Token") || sessionStorage.getItem("Token")
    if (!token) {
      toast.error("please Login first")
      nav("/Login")
    }
  }, [])
  return (
    <div className='w-full bg-[#F5F5F5] flex justify-start flex-col items-center gap-10  mt-21 ' >
      <div className="w-full scale-x-[-1] z-10 overflow-hidden h-29.75 bg-cover bg-center  bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
        <div className='h-full w-full flex flex-col gap-6 bg-[#00000099] '>
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full container max-w-333'>

        <div className='flex flex-col gap-4 w-full'>
          {
            items.map((el) => (
              <CartItems key={el.bookId} el={el} />
            ))
          }
        </div>
      </div>
    </div>

  )
}
