import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating = 0, totalStars = 5 }) {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (rating >= i) {
      // full star
      stars.push(<FaStar key={i} color="#FFD700" size={19} />);
    } else if (rating >= i - 0.5) {
      // half star
      stars.push(<FaStarHalfAlt key={i} color="#FFD700" size={19} />);
    } else {
      // empty star
      stars.push(<FaRegStar key={i} color="#FFD700" size={19} />);
    }
  }

  return <div className="flex flex-row gap-1">{stars}</div>;
}