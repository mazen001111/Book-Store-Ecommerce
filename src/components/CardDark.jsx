import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import dad from "../assets/dad.png"
import { FaRegHeart } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import StarRating from './Stars'
import cart from "../assets/cart.png"
export default function CardDark({ element }) {
    return (
        <div className='p-4  flex flex-col md:flex-row  max-w-[95%] w-90 px-5 md:w-106 items-center rounded-lg bg-[#3B2F4A]  gap-6'>
            <img className='w-full md:w-44 ' src={dad} />
            <div className='flex flex-col items-start w-full md:w-48 max-w-full'>
                <p className='font-bold text-[16px] w-full text-[#ffffff] mb-1'>{element.bookName}</p>
                <div className='text-[12px] w-full text-[#ffffff] mb-2 gap-1 flex flex-row'>
                    <p className='text-[12px] text-[#FFFFFF80]'>Author:</p>
                    <p className='text-[#ffffff] font-semibold'>{element.author}</p>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='w-1/2 flex flex-col gap-2'>
                        <div className='flex flex-roe w-full justify-between'>
                            <p>{<StarRating rating={element.rate} />}</p>
                            <div className='text-[14px] text-[#ffffff80] flex flex-row gap-2 justify-start  '>
                                <p>{"("}{element.countReview}</p>
                                <p className='text-[14px] text-[#ffffff80] flex flex-row justify-start '> {"  Reviews)"}</p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <p className='text-[14px] text-[#ffffff80]'>rate:</p>
                            <p className='text-[14px] text-[#ffffff] font-semibold'>{element.rate}</p>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-row justify-center gap-2 items-center'>
                        <p className='text-[#FFFFFF80] text-[14px]  font-semibold'>${Math.floor(element.price)}</p>
                        <p className='text-[#ffffff] text-[22px]  font-semibold'>${Math.floor(element.final_price)} </p>
                    </div>
                    <div className="w-full h-2 rounded-lg bg-gray-300 overflow-hidden">
                        <div className="h-full bg-[#EAA451] rounded-lg" style={{ width: (20 / element.stock) * 100 + "%" }}></div>
                    </div>
                    <p className='text-[#FFFFFF80] -mt-3.5'>{element.stock - 20} books left</p>
                    <div className='flex flex-row w-full justify-end'>
                        <div className='px-4 py-3.5 w-fit rounded-lg bg-[#D9176C] hover:scale-[1.04] transition duration-200 cursor-pointer'>
                            <img src={cart} className='w-[19.51px] h-4 ' alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
