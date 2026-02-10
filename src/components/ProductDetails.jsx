import React from 'react'

export default function ProductDetails() {
  return (
    <div className='flex flex-col max-[760px]:text-[12px] max-[950px]:text-[16px] text-[20px]  items-start w-full mt-10 mb-45 gap-4'>
        <div className='flex flex-row'>
            <p className=' font-bold'>Book Title : </p>
            <p className=''>Rich Dad And Poor Dad</p>
        </div>
        <div className='flex flex-row'>
            <p className=' font-bold'>Author : </p>
            <p className=''>Robert T. Kiyosaki</p>
        </div>
        <div className='flex flex-row'>
            <p className=' font-bold'>Publication Date : </p>
            <p className=''>1997</p>
        </div>
        <div className='flex flex-row'>
            <p className=' font-bold'>ASIN : </p>
            <p className=''>B09TWSRMCB</p>
        </div>
        <div className='flex flex-row'>
            <p className=' font-bold'>Language : </p>
            <p className=''>English</p>
        </div>
        <div className='flex flex-row'>
            <p className=' font-bold'>Publisher : </p>
            <p className=''>Printer</p>
        </div>
        <div className='flex flex-row'>
            <p className=' font-bold'>Pages : </p>
            <p className=''>336</p>
        </div>
        <div className='flex flex-row'>
            <p className=' font-bold'>Book Format : </p>
            <p className=''>Hard Cover</p>
        </div>
        <div className='flex flex-row'>
            <p className=' font-bold'>Best Seller Rank : </p>
            <p className=''>#3</p>
        </div>
    </div>
  )
}
