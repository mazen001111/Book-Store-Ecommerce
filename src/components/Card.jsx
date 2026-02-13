import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import dad from "../assets/dad.png"
import { FaRegHeart } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import StarRating from './Stars'
import { addCart, addWishlist } from '../store'
export default function Card({ element }) {
  const {addCartFunction} = addCart()
  const {addWishlistFunction} = addWishlist()

    return (
        <div className='p-5 min-[570px]:p-10 flex flex-col  min-[570px]:flex-row justify-between max-[570px]:items-center max-w-[95%] w-162 bg-[#ffffff]  gap-9.75'>
            <img className='w-50 min-[570px]:w-45' src={dad} /> 
            <div className='flex flex-col items-start w-88.25 max-w-[90%]'>
                <p className='font-bold text-lg text-[#222222] mb-1'>{element.bookName}</p>
                <div className='text-[14px] w-full text-[#22222280] mb-2 gap-1 flex flex-row'>
                    <p className='text-[14px] text-[#22222280]'>Author:</p>
                    <p className='text-[#222222] font-semibold'>{element.author}</p>
                </div>
                <p className='text-[14px] text-[#22222280] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,</p>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex flex-row w-full '>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <div className='flex flex-col w-full justify-between'> 
                                <p>{<StarRating rating={element.rate}/>}</p>
                                <p className='text-[14px] text-[#22222280] flex flex-row justify-start mt-2 '>({element.countReview} Reviews)</p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-[14px] text-[#22222280]'>rate:</p>
                                <p className='text-[14px] text-[#222222] font-semibold'>{element.rate}</p>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col justify-center items-center'>
                            <del className='text-[#2222227e] text-[16px] min-[570px]:text-[20px] font-semibold'>${element.price}</del>
                            <p className='text-[#222222] text-[16px] min-[570px]:text-[20px] font-semibold'>${element.final_price} </p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 w-full'>
                        <button onClick={()=>addCartFunction(element)} className='py-3.5 max-[692px]:w-[70%]  min-[692px]:px-10 bg-[#D9176C] rounded-lg text-[#ffffff] text-[12px] min-[692px]:text-lg font-semibold flex justify-center items-center cursor-pointer border-2 hover:bg-[#ffffff] hover:border-[#D9176C] hover:text-[#D9176C] transition duration-200'>Add To Cart <AiOutlineShoppingCart  className='font-bold ml-2 ' /></button>
                        <button onClick={()=>addWishlistFunction(element)} className='flex justify-center grow items-center rounded-lg p-[14] bg-[#ffffff] border-2 border-[#D9176C] cursor-pointer hover:bg-[#D9176C]   text-[#D9176C] hover:text-[#ffffff] transition duration-200'><FaRegHeart className='text-2xl'  /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
