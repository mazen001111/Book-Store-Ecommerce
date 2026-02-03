import React from 'react'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"

export default function Books() {
  return (
    <div className='w-full flex justify-center flex-col items-center gap-10 mb-111.25 pt-100  mt-15' >
      <div className="w-full scale-x-[-1] z-10 overflow-hidden h-29.75 bg-cover bg-center bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
        <div className='h-full w-full bg-[#00000099]'>
        </div>
      </div>
    </div>
  )
}
