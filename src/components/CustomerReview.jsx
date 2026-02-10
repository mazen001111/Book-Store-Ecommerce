import React from 'react'
import ReviewCard from './ReviewCard'

export default function CustomerReview() {
    return (
        <div className='w-full grid gap-6 grid-cols-1 min-[900px]:grid-cols-2 mt-10'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    )
}
