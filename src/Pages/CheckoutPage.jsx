import React, { useState } from 'react'
import { addCart } from '../store'
import toast from 'react-hot-toast'
import dad from "../assets/dad.png"
import minus from "../assets/minus-circle 1.png"
import plus from "../assets/Vector (1).png"
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"

export default function CheckoutPage() {
    const { items, increment, decrement, total } = addCart()
    const [promoCode, setPromoCode] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('cash')
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        address: '',
        note: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleConfirmOrder = () => {
        if (!formData.name || !formData.phone || !formData.email || !formData.city || !formData.state || !formData.address) {
            toast.error('Please fill all shipping information')
            return
        }
        toast.success('Order confirmed successfully!')
    }

    const tax = 4
    const shipping = 0
    const finalTotal = total + tax + shipping

    return (
        <div className='w-full bg-[#F5F5F5] min-h-screen py-8 '>
            <div className=" w-full scale-x-[-1] z-10 overflow-hidden h-29.75 bg-cover bg-center  bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
                <div className='h-full w-full flex flex-col gap-6 bg-[#00000099] '>
                </div>
            </div>
            <div className='w-full mt-20 px-10'>
                <h1 className='text-2xl sm:text-3xl font-bold text-[#222222] mb-8'>Check out</h1>

                <div className='flex flex-col lg:flex-row gap-6'>
                    <div className='w-full lg:w-[60%] flex flex-col gap-6'>
                        <div className='bg-white rounded-lg p-6'>
                            <h2 className='text-lg font-bold text-[#222222] mb-4'>Shipping information</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='text-xs text-[#22222280] mb-1 block'>Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder='John Smith'
                                        className='w-full px-3 py-2.5 border border-[#22222233] rounded-lg text-sm text-[#222222] placeholder-[#22222280] focus:outline-none focus:border-[#D9176C]'
                                    />
                                </div>
                                <div>
                                    <label className='text-xs text-[#22222280] mb-1 block'>Phone</label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder='123456789'
                                        className='w-full px-3 py-2.5 border border-[#22222233] rounded-lg text-sm text-[#222222] placeholder-[#22222280] focus:outline-none focus:border-[#D9176C]'
                                    />
                                </div>
                                <div>
                                    <label className='text-xs text-[#22222280] mb-1 block'>Email</label>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder='johnsmith@gmail.com'
                                        className='w-full px-3 py-2.5 border border-[#22222233] rounded-lg text-sm text-[#222222] placeholder-[#22222280] focus:outline-none focus:border-[#D9176C]'
                                    />
                                </div>
                                <div>
                                    <label className='text-xs text-[#22222280] mb-1 block'>City</label>
                                    <input
                                        type='text'
                                        name='city'
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder='Model'
                                        className='w-full px-3 py-2.5 border border-[#22222233] rounded-lg text-sm text-[#222222] placeholder-[#22222280] focus:outline-none focus:border-[#D9176C]'
                                    />
                                </div>
                                <div>
                                    <label className='text-xs text-[#22222280] mb-1 block'>State</label>
                                    <input
                                        type='text'
                                        name='state'
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        placeholder='11311'
                                        className='w-full px-3 py-2.5 border border-[#22222233] rounded-lg text-sm text-[#222222] placeholder-[#22222280] focus:outline-none focus:border-[#D9176C]'
                                    />
                                </div>
                                <div className='sm:col-span-2'>
                                    <label className='text-xs text-[#22222280] mb-1 block'>Address</label>
                                    <input
                                        type='text'
                                        name='address'
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder='Mearbi, Cairo, Egypt.'
                                        className='w-full px-3 py-2.5 border border-[#22222233] rounded-lg text-sm text-[#222222] placeholder-[#22222280] focus:outline-none focus:border-[#D9176C]'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='bg-white rounded-lg p-6'>
                            <h2 className='text-lg font-bold text-[#222222] mb-4'>Payment Method</h2>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='payment'
                                        value='online'
                                        checked={paymentMethod === 'online'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className='accent-[#D9176C]'
                                    />
                                    <span className='text-sm text-[#222222]'>Online payment</span>
                                </label>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='payment'
                                        value='cash'
                                        checked={paymentMethod === 'cash'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className='accent-[#D9176C]'
                                    />
                                    <span className='text-sm text-[#222222]'>Cash on delivery</span>
                                </label>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='payment'
                                        value='pos'
                                        checked={paymentMethod === 'pos'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className='accent-[#D9176C]'
                                    />
                                    <span className='text-sm text-[#222222]'>POS on delivery</span>
                                </label>
                            </div>
                        </div>

                        <div className='bg-white rounded-lg p-6'>
                            <h2 className='text-lg font-bold text-[#222222] mb-4'>Note</h2>
                            <textarea
                                name='note'
                                value={formData.note}
                                onChange={handleInputChange}
                                placeholder='Add note'
                                rows='4'
                                className='w-full px-3 py-2.5 border border-[#22222233] rounded-lg text-sm text-[#222222] placeholder-[#22222280] focus:outline-none focus:border-[#D9176C] resize-none'
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-[40%]'>
                        <div className='bg-white rounded-lg p-6 sticky top-4'>
                            <h2 className='text-lg font-bold text-[#222222] mb-4'>Order summary</h2>

                            <div className='flex flex-col gap-4 mb-6 max-h-80 overflow-y-auto'>
                                {items.map((item) => (
                                    <div key={item.bookId} className='flex gap-3 pb-4 border-b border-[#22222233]'>
                                        <img src={dad} alt={item.bookName} className='w-20 h-24 object-cover rounded' />
                                        <div className='flex flex-col grow'>
                                            <h3 className='text-sm font-bold text-[#222222] mb-1'>{item.bookName}</h3>
                                            <p className='text-xs text-[#22222280] mb-2'>Author: <span className='text-[#222222]'>{item.author}</span></p>
                                            <div className='flex items-center gap-2 text-xs text-[#22222280]'>
                                                <span>Free shipping</span>
                                            </div>
                                            <div className='flex items-center justify-between mt-2'>
                                                <div className='flex items-center gap-2'>
                                                    <img
                                                        src={minus}
                                                        alt='minus'
                                                        className='w-4 h-4 cursor-pointer'
                                                        onClick={() => decrement(item.bookId)}
                                                    />
                                                    <span className='text-sm font-semibold text-[#222222]'>{item.qty}</span>
                                                    <img
                                                        src={plus}
                                                        alt='plus'
                                                        className='w-4 h-4 cursor-pointer'
                                                        onClick={() => increment(item.bookId)}
                                                    />
                                                </div>
                                                <span className='text-base font-bold text-[#222222]'>${Math.floor(item.price * item.qty)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='mb-6'>
                                <label className='text-xs text-[#22222280] mb-2 block'>Have a discount code?</label>
                                <div className='flex gap-2'>
                                    <input
                                        type='text'
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        placeholder='Enter Promo Code'
                                        className='grow px-3 py-2 border border-[#22222233] rounded-lg text-sm text-[#222222] placeholder-[#22222280] focus:outline-none focus:border-[#D9176C]'
                                    />
                                    <button className='px-4 py-2 bg-[#3B2F4A] text-white text-sm font-semibold rounded-lg hover:bg-[#2d2438] transition duration-200'>
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className='space-y-2 mb-6'>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-[#22222280]'>Subtotal</span>
                                    <span className='text-[#222222] font-semibold'>${Math.floor(total)}</span>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-[#22222280]'>Tax</span>
                                    <span className='text-[#222222] font-semibold'>${tax}</span>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-[#22222280]'>Shipping</span>
                                    <span className='text-[#222222] font-semibold'>${shipping}</span>
                                </div>
                                <div className='pt-2 border-t border-[#22222233]'>
                                    <div className='flex justify-between'>
                                        <span className='text-sm font-semibold text-[#222222]'>Total (USD)</span>
                                        <span className='text-xl font-bold text-[#D9176C]'>${Math.floor(finalTotal)}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleConfirmOrder}
                                className='w-full py-3.5 bg-[#D9176C] text-white text-base font-semibold rounded-lg hover:bg-[#b91359] transition duration-200'
                            >
                                Confirm order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
