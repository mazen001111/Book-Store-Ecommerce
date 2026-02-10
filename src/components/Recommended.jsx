import React, { useEffect, useState } from 'react'
import CardDark from './CardDark'
import axios from 'axios'

export default function Recommended() {
    let domain = "https://bookstore.eraasoft.pro/api"
    let endPoint = "/home"
    let url = domain + endPoint
    const [Recommended, setRecommended] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
        const collect = async () => {
            try {
                let res = await axios.get(url, { params: { populate: { recommended: { populate: "*" } } } })
                console.log(res.data.data)
                setRecommended(res.data.data.recommended)
            } catch (error) {
                console.log(error)
            }
        }
        collect()
    }, [])
    return (
        <div className='w-full mt-20 mb-50'>
            <div className=' grid place-items-center grid-cols-1 gap-9 min-[1230px]:gap-6 min-[1230px]:grid-cols-2 '>
                {
                    Recommended.map((el) => (
                        <CardDark element={el} />
                    ))
                }
            </div>
        </div>
    )
}
