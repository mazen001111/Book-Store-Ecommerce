import React from 'react'
import jack from "../assets/jack.jpg"
import StarRating from './Stars'

export default function ReviewCard() {
    return (
        <div className='flex flex-col items-start bg-[#FFFFFF] w-full gap-4 min-h-57 py-4 px-6'>
            <div className='w-full flex flex-row items-center gap-4'>
                <div className='h-15 w-15 bg-cover rounded-[30px]' style={{ backgroundImage: `url(${jack})` }}></div>
                <div className='flex flex-col gap-1'>
                    <p className='text-lg font-semibold text-[#222222]'>John Smith</p>
                    <p className='text-[#25D994] text-[14px] font-semibold'>Verified Purchase</p>
                </div>
            </div>
            <p className='text-[16px] text-[#22222280]  '>Reviewed On 28/07/2024</p>
            <div className='flex flex-row gap-4 max-[400px]:flex-col max-[400px]:items-start items-center -mt-2.5 w-full'>
                <p className='text-[#222222] font-semibold text-[20px]'>Excellent Book</p>
                <div className='flex flex-row items-center gap-4 '>
                    <p className='text-[#222222] font-semibold text-[20px]'>5.0</p>
                    <StarRating rating={5} />
                </div>
            </div>
            <p className='text-[16px] text-[#22222280]  ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, </p>
        </div>
    )
}
