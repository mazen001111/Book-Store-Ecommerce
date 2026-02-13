import React from 'react'
import dad from "../assets/dad.png"
import truck from "../assets/car.png"
import minus from "../assets/minus-circle 1.png"
import plus from "../assets/Vector (1).png"
import garbage from "../assets/Vector (2).png"
import { addWishlist } from '../store'

export default function WishListItems({ el }) {
    const { total, increment, decrement, close, FindQyt, items } = addWishlist()
    let index = items.findIndex(element => element.bookId == el.bookId)
    let qty = items[index].qty
    console.log(qty)

    return (
        <div className='flex flex-row p-6 w-full max-[845px]:flex-col  max-[845px]:items-center min-h-75.25 bg-[#ffffff]'>
            <img className='h-69 max-[845px]:w-70' src={dad} alt="" />
            <div className=' ml-6 flex max-[845px]:w-full flex-col w-62.75'>
                <p className='text-[#222222] text-lg font-bold mb-1'>{el.bookName}</p>
                <p className='flex flex-row gap-2 text-[#22222280] mb-2 text-[14px] '>Author : <p className='text-[#222222] font-normal'>{el.author}</p></p>
                <p className='flex flex-row gap-2 text-[#22222280] text-[13px] max-[1150px]:hidden w-full' >{el.description}</p>
                <div className='text-[#22222280] border w-fit items-center border-[#22222233] mt-8.75 px-3 py-2 flex flex-row max-[1114px]:hidden gap-2 rounded-lg'><img className='h-4 w-4' src={truck} alt="" /> Free Shipping</div>
                <p className='flex flex-row text-[#22222280] font-semibold mt-8.5'>ASIN : B09TWSRMCB</p>
            </div>
            <div className='grow   max-w-[60%] max-[845px]:max-w-full flex flex-row justify-center  ml-6 items-center'>
                <div className='w-164  flex flex-row  justify-between ml-6 items-center'>
                    <p className='text-[#000000] text-2xl font-bold  flex flex-row items-center justify-center gap-4'><img onClick={() => decrement(el.bookId)} className='h-5 w-5 cursor-pointer' src={minus} alt="" />{qty }<img onClick={() => increment(el.bookId)} className='h-5 w-5 cursor-pointer' src={plus} alt="" /> </p>
                    <p className='text-[#000000] text-[30px] font-bold '>${Math.floor(el.price)} </p>
                    <p className='text-[#000000] text-[30px] font-bold '>${Math.floor(total)} </p>
                    <p><img onClick={() => close(el.bookId)} className='h-6 w-5 cursor-pointer' src={garbage} alt="" /></p>
                </div>
            </div>
        </div>
    )
}
