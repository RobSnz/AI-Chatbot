import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
  
  <div>
    {[...Array(5)].map((_, i) => {
      const ratingValue = i + 1;

      return (
          <FaStar
            key={i}
            className="star"
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            size={30}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setRating(ratingValue)}
          />
      );
    })}
    <p className = "ratingValue">The Rating is {rating} </p>
  </div> 
  );

};

export default StarRating;