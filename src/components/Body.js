import React from 'react'
import RestaurantCard from './RestaurantCard'
import {restaurantList} from '../Utils/Mockdata'

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant} />
        ))}
      </div>
  

    </div>
  )
}

export default Body
