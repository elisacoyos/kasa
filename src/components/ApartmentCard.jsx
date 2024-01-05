import React from 'react'
import "./ApartmentCard.scss";
import { Link } from 'react-router-dom';

function Apartment() {
  return (
    <div className='apartment'>
      <Link to="/flat">
       <div className='apartment__subtitle'>Titre de la location</div>
      </Link>
    </div>
  )
}

export default Apartment