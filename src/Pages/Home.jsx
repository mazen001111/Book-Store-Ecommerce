import React from 'react'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"
import { FaSearch } from 'react-icons/fa'
import { MdMicNone } from 'react-icons/md'

export default function Home() {
  return (
    <div className='text-black pt-201'>
      <div className="w-full scale-x-[-1] z-10 overflow-hidden h-201 bg-cover bg-center bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
        <div className='h-full w-full bg-[#00000099] flex justify-center items-center'>
          <div className='flex flex-row w-133.75 h-14.75 items-center  bg-white scale-x-[-1]  rounded-[50px] max-w-[90%]  overflow-hidden'>
            <input className='py-4 px-6 flex justify-center items-center h-full w-107.5 outline-0 text-[20px]' type="text" placeholder='Search' />
            <div className='flex flex-row justify-center gap-4 items-center grow h-full text-[#ffffff] text-[22px] '>
              <MdMicNone className='w-grow h-full text-3xl text-[#22222280]'/>
              <button className='flex flex-row justify-center items-center  w-[59px] h-full text-[#ffffff] text-[22px] bg-[#D9176C]'><FaSearch /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
