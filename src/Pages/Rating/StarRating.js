import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import storeRating from "./storeRating";
import AuthService from '../../Services/AuthService';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    AuthService.retrieveData().then(data => {
      setUserData(data.user);
      console.log(userData);
    });
  }, []);

  function store(num){
    storeRating(userData.username, num);
    setRating(num);
  }

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
            onClick={() => store(ratingValue)}
          />
      );
    })}
    <p className = "ratingValue">The Rating is {rating} </p>
  </div> 
  );
};

export default StarRating;