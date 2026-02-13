import React, { useState } from 'react'
import { addCart } from '../store'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
    const nav = useNavigate()
    const [promoCode, setPromoCode] = useState('')
    const { total } = addCart()


    return (
        <div className='w-full max-w-[90%] mx-auto p-4 sm:p-6 lg:p-8 bg-[#3B2F4A1A]'>
            <div className=' rounded-lg p-6 sm:p-8 lg:p-10'>
                <h2 className='text-xl sm:text-2xl font-bold text-[#222222] mb-3'>Payment Summary</h2>
                <p className='text-sm text-[#22222280] mb-6 max-w-md'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
                </p>

                <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                    <div className='w-full lg:w-1/2 mt-20'>
                        <label className='text-sm text-[#222222] mb-3 block'>Have a discount code?</label>
                        <div className='flex flex-row gap-2'>
                            <div className='relative w-full max-w-xs'>
                                <input
                                    type='text'
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    placeholder='Enter Promo Code'
                                    className='w-full px-4 py-3 border border-[#22222233] rounded-lg text-sm text-[#222222] placeholder-[#22222280] focus:outline-none focus:border-[#D9176C]'/>
                            </div>
                            <button className='px-6 py-3 bg-[#3B2F4A] text-white text-sm font-semibold rounded-lg hover:bg-[#2d2438] transition duration-200'>
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 '>
                        <div className='space-y-3 mb-20 '>
                            <div className='flex justify-between items-center text-sm'>
                                <span className='text-[#22222280]'>Subtotal</span>
                                <span className='text-[#222222] font-semibold'>${Math.floor(total)}</span>
                            </div>
                            <div className='flex justify-between items-center text-sm'>
                                <span className='text-[#22222280]'>Shipping</span>
                                <span className='text-[#222222] font-semibold'>Free Delivery</span>
                            </div>
                            <div className='flex justify-between items-center text-sm'>
                                <span className='text-[#22222280]'>Tax</span>
                                <span className='text-[#222222] font-semibold'>${29}</span>
                            </div>
                            <div className='border-t border-[#22222233] pt-3 mt-3'>
                                <div className='flex justify-between items-center'>
                                    <span className='text-[#222222] font-semibold'>Total</span>
                                    <span className='text-[#D9176C] text-2xl font-bold'>${Math.floor(total+29)}</span>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <button onClick={() => nav('/CheckoutPage')} className='w-full py-3.5 bg-[#D9176C] text-white text-base font-semibold rounded-lg hover:bg-[#b91359] transition duration-200'>
                                Check out
                            </button>
                            <button onClick={() => nav('/Books')} className='w-full py-3.5 bg-white text-[#D9176C] text-base font-semibold rounded-lg border-2 border-[#D9176C] hover:bg-[#D9176C] hover:text-white transition duration-200'>
                                Keep Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
