import React from 'react'
import { useContext } from 'react';
import './FoodDisplay.css'
import { StoreContext } from '../../context/storecontext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx'
import { food_list } from '../../assets/assets.js';


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

if (!food_list || !Array.isArray(food_list)) {
    return <div className="food-display">No food items available.</div>;
}

return (
    <div className="food-display" id='food-display'>
        <h2>Top dishes near you </h2>
        <div className='food-display-list'>
            {(category === 'all'
                ? food_list
                : food_list.filter(item => item.category === category)
            ).map((item, index) => (
                <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                />
            ))}
        </div>
    </div>
);
}

export default FoodDisplay
