import React from 'react';
import starRed from '../assets/star-red.png';
import starGrey from '../assets/star-grey.png';
import './Rating.scss';


export default function Rating({ value }) {

  return (

    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={i < value ? starRed : starGrey}
          alt="star"
          // className={i < value ? "star-red" : "star-grey"}
        />
      ))}
    </div>
  );
};