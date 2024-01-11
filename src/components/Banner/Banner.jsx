import React from 'react'
import "./Banner.scss";

function Banner({text, img}) {
  
  return (
    <div className='banner'>
        {text && <h1>{text}</h1>}
        <img className='image__banner' src={img}/>
    </div>
  )
}

export default Banner