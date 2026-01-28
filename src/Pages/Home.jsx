import React, {  useEffect, useState } from 'react'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"
import { FaSearch } from 'react-icons/fa'
import { MdMicNone } from 'react-icons/md'
import car from "../assets/car.png"
import card from "../assets/card.png"
import recycle from "../assets/recycle.png"
import sup from "../assets/support.png"
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import richDad from "../assets/dad.png"
import tea from "../assets/tea.jpg"
import power from "../assets/poer.png"
import research from "../assets/craft of search.jpg"
import design from "../assets/design.jpg"
import thinking from "../assets/thinking.jpg"
import habits from "../assets/habits.jpg"
import sunRise from "../assets/sunrise.png"
import { Link } from 'react-router-dom'
import Card from '../components/card'


export default function Home() {
  const products = [richDad, tea, power, research, design, thinking, habits, sunRise]
  const [bestSeller, setBestSeller] = useState([])
  const [Recommended, setRecommended] = useState([])

  let domain = "https://bookstore.eraasoft.pro/api"
  let endPoint = "/home"
  let url = domain + endPoint

  useEffect(() => {
    const collect = async () => {
      try {
        let res = await axios.get(url,{params:{populate:{recommended:{populate:"*"}}}})
        console.log(res.data.data)
        setBestSeller(res.data.data.best_selling_image)
        setRecommended(res.data.data.recommended)
      } catch (error) {
        console.log(error)
      }
    }
    collect()
  }, [])
  return (
    <div className='text-black pt-201 w-full'>
      <div className="w-full scale-x-[-1] z-10 overflow-hidden h-201 bg-cover bg-center bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
        <div className='h-full w-full bg-[#00000099] flex justify-center items-center'>
          <div className='flex flex-row w-133.75 h-14.75 items-center  bg-white scale-x-[-1]  rounded-[50px] max-w-[95%]  overflow-hidden'>
            <input className='py-4 px-6 flex justify-center items-center h-full w-107.5 outline-0 text-[20px]' type="text" placeholder='Search' />
            <div className='flex flex-row justify-center gap-4 items-center grow h-full text-[#ffffff] text-[22px] '>
              <MdMicNone className='w-grow h-full text-3xl text-[#22222280]' />
              <button className='flex flex-row justify-center items-center  w-[59px] h-full text-[#ffffff] text-[22px] bg-[#D9176C]'><FaSearch /></button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-101.75 flex justify-center items-center py-29.75'>
        <div className='container w-full max-w-320.75 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-15'>
          <div className='flex flex-col  max-w-[95%] gap-[17.25px]' >
            <img className='w-7.5' src={car} alt="" />
            <div className='flex flex-col gap-2'>
              <p className='w-full font-bold text-lg text-[#222222]'>Fast & Reliable Shipping</p>
              <p className='w-full text-[#22222280] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
          </div>
          <div className='flex flex-col max-w-[95%] gap-[17.25px]' >
            <img className='w-7.5' src={card} alt="" />
            <div className='flex flex-col gap-2 w-full'>
              <p className='w-full font-bold text-lg text-[#222222]'>Secure Payment</p>
              <p className='w-full text-[#22222280] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
          </div>
          <div className='flex flex-col  max-w-[95%] gap-[17.25px]' >
            <img className='w-7.5' src={recycle} alt="" />
            <div className='flex flex-col gap-2'>
              <p className='w-full font-bold text-lg text-[#222222]'>Easy Returns</p>
              <p className='w-full text-[#22222280] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
          </div>
          <div className='flex flex-col  max-w-[95%] gap-[17.25px]' >
            <img className='w-7.5' src={sup} alt="" />
            <div className='flex flex-col gap-2'>
              <p className='w-full font-bold text-lg text-[#222222]'>24/7 Customer Support</p>
              <p className='w-full text-[#22222280] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-198 bg-[#3B2F4A] py-30 flex justify-center items-center flex-col gap-20'>
        <div className='flex flex-col gap-2 w-129 max-w-[95%]'>
          <p className='font-bold text-[26px] text-[#ffffff] text-center'>Best Seller</p>
          <p className='text-[#FFFFFF80] text-[16px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. </p>
        </div>
        <div className='w-full h-64 flex flex-row '>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={7}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 7 },
            }}
            className="w-full h-full"
          >
            {products.map((photo) => (
              <SwiperSlide key={photo}>
                <img
                  src={photo}
                  alt=""
                  className="w-43.25 h-64 rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
        <Link to="/Books" className='text-[#ffffff] text-lg flex justify-center items-center py-[11.5px] px-11.75 bg-[#D9176C] rounded-lg cursor-pointer'>Shop</Link>
      </div>
      <div className='w-full flex justify-center'>
        <div className='container max-w-330 flex flex-col items-center justify-center md:grid-cols-2 min-h-165'>
          <h1 className='font-bold text-[#222222] text-[26px] text-start w-full mb-10'>Recomended For You</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
            {
              Recommended.map((el) => (
                <Card element={el} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
