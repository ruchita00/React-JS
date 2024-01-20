import React from 'react'
import { CDN_URL } from '../Utils/constants'

const RestaurantCard = ({cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating}) => {
  return (
    <div> 
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
    {" "}
    <img
      src={
       CDN_URL +
        cloudinaryImageId
      }
    />
    <h3>{name}</h3>
    <h4>{cuisines}</h4>
    <h4>{area}</h4>
    <h4>{avgRating} stars</h4>
    <h4>{lastMileTravelString}</h4>
    <h4>{costForTwoString}</h4>
  </div>
      
    </div>
  )
}

export default RestaurantCard
