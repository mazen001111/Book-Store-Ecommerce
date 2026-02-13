import React, { useState } from 'react'
import dad1 from "../assets/dad.png"
import dad2 from "../assets/dad2.jpg"
import dad3 from "../assets/dad3.png"

import group from "../assets/Frame 1000004859.png"
import { CiShare2 } from 'react-icons/ci'
import StarRating from './Stars'
import { FaRegHeart } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { addCart } from '../store'
export default function Details() {
    const [index, setIndex] = useState(0)
    const photos = [dad1, dad2, dad3]
    const { addCartFunction } = addCart()
    let el = {
        bookId: 3,
        bookName: "Sed labore doloribus.",
        author: "Quentin Sauer",
        price: 269.56,
        discount: 13,
        final_price: 234.5172,
        description: "Sunt vitae veniam architecto minima vero. Et sunt occaecati cum possimus aspernatur omnis. Incidunt ullam fugiat omnis debitis quibusdam.",
        rate: null,
        bookImage: [],
        stock: 88,
        numberOfPages: 172,
        countReview: 0,
        publicationYear: 1995,
        lang: "english",
        asinCode: "SRW920308",
        bookFormat: "Hard Cover",
        catId: 53,
        category_name: "Petroleum Pump Operator",
        reviews: []
    }
    return (
        <div className='min-h-150 w-full flex flex-row max-[1180px]:flex-col max-[1180px]:items-center gap-6'>
            <div className='flex flex-col gap-5 items-center'>
                <div className='w-78 h-114 bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${photos[index]})` }}></div>
                <div className='flex flex-row gap-5'>
                    {
                        photos.map((el, index2) => (
                            <div key={index2} onClick={() => setIndex(index2)} className='w-18 h-27 bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${el})` }}></div>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col items-start justify-start max-w-[90%] '>
                <div className='flex flex-row justify-between items-center mb-6 max-w-[90%] '>
                    <div className='flex flex-col gap-2 w-189.5 max-w-full'>
                        <h1 className='font-bold text-[28px] text-[#222222] '>Rich Dad And Poor Dad</h1>
                        <p className='text-lg font-normal text-[#22222280]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                    </div>
                    <div className='flex flex-row h-full gap-2 items-start max-[980px]:hidden'>
                        <img className='h-6 w-33 ' src={group} />
                        <CiShare2 size={30} />
                    </div>
                </div>
                <div className='flex flex-row gap-6 items-center justify-start w-full mb-10 max-[535px]:flex-wrap max-[535px]:mb-3'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#22222280] text-[14px]'>Author</p>
                        <p className='text-[#222222] text-[14px] font-semibold'>Robert T. Kiyosaki</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#22222280] text-[14px]'>Publication Year</p>
                        <p className='text-[#222222] text-[14px] font-semibold'>1997</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#22222280] text-[14px]'>Book</p>
                        <p className='text-[#222222] text-[14px] font-semibold'>1 Of 1</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#22222280] text-[14px]'>Pages</p>
                        <p className='text-[#222222] text-[14px] font-semibold'>336</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#22222280] text-[14px]'>Language</p>
                        <p className='text-[#222222] text-[14px] font-semibold'>English</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center mb-4'>
                    <StarRating rating={4.5} />
                    <p className='text-lg font-normal text-[#22222280]'>(210 reviews)</p>
                </div>
                <p className='text-lg font-normal flex flex-row gap-2 text-[#22222280]'>Rate : <p className='font-bold text-[#222222]'>4.2</p></p>
                <div className='mt-5 flex flex-row w-full justify-between max-[535px]:flex-col max-[535px]:w-full max-[535px]:gap-5'>
                    <div className='flex flex-row items-center gap-4'>
                        <p className='text-4xl font-semibold text-[#222222]'>$40.00</p>
                        <del lassName='text-lg font-normal flex flex-row gap-2 text-[#22222280] '>$60.00</del>
                    </div>
                    <div className='flex flex-row gap-4 max-[535px]:w-d-full '>
                        <button onClick={() => addCartFunction(el)} className=' w-45 bg-[#D9176C] py-3 max-[535px]:w-[70%] rounded-lg text-[#ffffff] text-[16px] font-semibold flex justify-center items-center cursor-pointer border-2 hover:bg-[#ffffff] hover:border-[#D9176C] hover:text-[#D9176C] transition duration-200'>Add To Cart <AiOutlineShoppingCart className='font-bold ml-2 ' /></button>
                        <button className='flex justify-center w-12 items-center rounded-lg py-3  bg-[#ffffff] border-2 border-[#D9176C] cursor-pointer hover:bg-[#D9176C]   text-[#D9176C] hover:text-[#ffffff] transition duration-200'><FaRegHeart className='text-xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
