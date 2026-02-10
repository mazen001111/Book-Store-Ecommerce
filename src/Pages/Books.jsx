import React, { useEffect, useState } from 'react'
import Library from "../assets/533643aa8db82414f48d43a992d009dda3961386.png"
import { MdMicNone } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { IoSearch } from 'react-icons/io5'
import axios from 'axios'
import Card from '../components/Card'
import CardBooks from '../components/CardBooks'
import filterIcon from "../assets/settings-sliders (1) 1.png"
import { FaChevronRight, FaEarthAfrica } from 'react-icons/fa6'
export default function Books() {

  let domain = "https://bookstore.eraasoft.pro/api"
  let endPoint = "/book"
  let url = domain + endPoint
  const [books, setBooks] = useState([])
  const [Categories, setCategories] = useState()
  // const fetchBooks = async () => {
  //   try {
  //     let res = await axios.get(url,{headers:{
  //       Authorization: `Bearer 3|6yAzDLd5ol5lU4Fjkxelcf5sniwOmqqQVXKZdiQMf9eea547`,
  //       Accept: "application/json",
  //           }})
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error?.response)
  //   }
  // }
  const [isActivated, SetIsActivated] = useState(false)
  const [view, setview] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const collect = async () => {
      try {
        let res = await axios.get(url, {
          params: {
            populate: "*",
          }
        })
        console.log(res.data.data)
        setBooks(res.data.data.books)
        setview(res.data.data.books)
      } catch (error) {
        console.log(error)
      }
    }
    collect()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    const collect = async () => {
      try {
        let res = await axios.get(url, { params: { populate: { recommended: { populate: "*" } } } })
        setCategories(res.data.data.categories)
      } catch (error) {
        console.log(error)
      }
    }
    collect()
  }, [])

  const Searching = (value) => {
    let result = books.filter(el => el.bookName.toLowerCase().includes(value.toLowerCase()))
    setview(result)
  }

  return (
    <div className='w-full bg-[#F5F5F5] flex justify-start flex-col items-center gap-10  mt-21 ' >
      <div className="w-full scale-x-[-1] z-10 overflow-hidden h-29.75 bg-cover bg-center  bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${Library})` }}>
        <div className='h-full w-full flex flex-col gap-6 bg-[#00000099] '>
        </div>
      </div>
      <div className='flex  flex-row lg:flex-row container max-w-333 gap-10 justify-start max-[1367px]:justify-center   items-start min-h-dvh  w-full '>
        <div className=' max-[1367px]:hidden flex flex-col w-90% gap-6 lg:w-74 h-full '>
          <div className='flex flex-row w-full gap-4 h-fit items-center'>
            <img className="w-6 h-6" src={filterIcon} alt="" />
            <h1 className='flex flex-row gap-4 text-[#222222] text-2xl font-semibold w-full'>Filter</h1>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-[#D9176C80] font-semibold text-lg"> Categories</div>
            <div className="collapse-content text-sm">
              <div className='flex flex-col items-start gap-2.5'>
                {
                  Categories?.map(el => (
                    (
                      <label className='flex flex-row gap-2.5'>
                        <input type="radio" name="The Same" id="" />{el.categoryName}
                      </label>
                    )
                  ))
                }
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-[#222222] font-semibold text-lg"> Publisher</div>
            <div className="collapse-content text-sm">
              <div className='flex flex-col items-start gap-2.5'>

              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-[#222222] font-semibold text-lg"> Year</div>
            <div className="collapse-content text-sm">
              <div className='flex flex-col items-start gap-2.5'>

              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col max-[1367px]:items-center  grow h-full mb-24.25 mt-15 max-w-[90%]'>
          <div className='flex flex-row max-[700px]:flex-col max-[700px]:h-fit max-[700px]:px-4 gap-6.5 px-12 mb-20 h-10 w-full items-start'>
            <div className='flex flex-row mb-5 w-189.5 max-w-[90%] h-14.75 items-center border border-[#22222233] scale-[1]  bg-[#FFFFFF] rounded-[50px]   overflow-hidden'>
              <input onChange={(Event) => Searching(Event.target.value)} className='py-4 px-6 flex justify-center items-center h-full max-w-[67%] w-107.5  outline-0 text-[20px]' type="text" placeholder='Search' />
              <div className='flex flex-row justify-center gap-4 items-center grow h-full bg-[#FFFFFF] text-[#ffffff] text-[22px] right-0 absolute '>
                <MdMicNone className='w-grow h-full text-3xl text-[#22222280]' />
                <button className='flex flex-row justify-center items-center border-l-2 border-l-[#22222233]  w-14.75 h-full text-[#D9176C] text-[22px] bg-[#FFFFFF]'><IoSearch /></button>
              </div>
            </div>
            <div className="collapse min-[1367px]:hidden w-50 collapse-arrow bg-base-100 border border-base-300">
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-[#D9176C80] font-semibold text-lg"> Categories</div>
              <div className="collapse-content text-sm">
                <div className='flex flex-col items-start gap-2.5'>
                  {
                    Categories?.map(el => (
                      (
                        <label className='flex flex-row gap-2.5'>
                          <input type="radio" name="The Same" id="" />{el.categoryName}
                        </label>
                      )
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-start w-full'>
            <div className='container max-w-330 flex w-full flex-col items-center justify-start min-h-165 md:px-12'>
              <div className=' grid place-items-center grid-cols-1 gap-14 w-full  '>
                {
                  view?.map((el) => (
                    <CardBooks  element={el} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
