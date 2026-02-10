import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import dad from "../assets/dad.png"
import { FaRegHeart } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import StarRating from './Stars'
export default function CardBooks({ element }) {

    return (
        <div className=' flex flex-row   max-w-[95%] w-full min-h-63.75 bg-[#F5F5F5] max-[700px]:flex-col max-[700px]:items-center  gap-9.75'>
            <img className='max-[700px]:w-50  min-[700px]:w-50' src={dad} />
            <div className='flex flex-col items-start max-[700px]:w-full grow min-[700px]:max-w-[70%]'>
                <div className='w-full flex flex-row'>
                    <div className='w-106 max-w-full'>
                        <p className='font-bold text-lg text-[#222222] mb-1'>{element.bookName}</p>
                        <p className='text-[14px] text-[#22222280] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,</p>
                    </div>
                    <div className='max-[950px]:hidden'>
                        <p className='bg-[#FFFFFF] text-[#EBC305] w-49.5 text-[14px] py-2 px-3 rounded-lg border border-[#EBC305]'>25% Discount code: Ne212</p>
                    </div>
                </div>
                <div className='flex flex-row max-[700px]:flex-col gap-4 w-full justify-between grow'>
                    <div className='flex flex-col max-[700px]:flex-row max-[700px]:w-full grow gap-4'>
                        <div className='max-[700px]:w-full w-1/2 flex flex-col gap-2'>
                            <div className='flex flex-col w-full justify-between'>
                                <p>{<StarRating rating={element.rate} />}</p>
                                <p className='text-[14px] text-[#22222280] flex flex-row justify-start mt-2 '>({element.countReview} Reviews)</p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-[14px] text-[#22222280]'>rate:</p>
                                <p className='text-[14px] text-[#222222] font-semibold'>{element.rate}</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row gap-10'>
                            <div className='text-[14px]  text-[#22222280]  flex flex-col'>
                                <p className='text-[14px] text-[#22222280]'>Author</p>
                                <p className='text-[#222222] font-semibold'>{element.author}</p>
                            </div>
                            <div className='text-[14px]  text-[#22222280]  flex flex-col'>
                                <p className='text-[14px] text-[#22222280]'>Year</p>
                                <p className='text-[#222222] font-semibold'>{element.publicationYear}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 w-61 max-[700px]:w-full items-end justify-end'>
                        <p className='text-[#222222] text-[16px] min-[570px]:text-[20px] font-semibold'>${Math.floor(element.final_price)} </p>

                        <div className='flex flex-row gap-4 w-61 max-[700px]:w-full items-end max-[700px]:justify-between justify-end h-12'>
                            <button className=' bg-[#D9176C] max-[700px]:grow rounded-lg  px-[29.5px] py-3.25 h-full text-[#ffffff] text-[16px]  font-semibold flex justify-center items-center cursor-pointer hover:-translate-y-1 transition duration-200'>Add To Cart <AiOutlineShoppingCart className='font-bold ml-2 ' /></button>
                            <button className='flex justify-center items-center rounded-lg p-3.5  h-full bg-[#ffffff] border border-[#D9176C] cursor-pointer  text-[#D9176C] hover:-translate-y-1 transition duration-200'><FaRegHeart className='text-lg' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
