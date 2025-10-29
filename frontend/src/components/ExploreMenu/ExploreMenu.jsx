import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
return (
    <div className='explore-menu' id='explore-menu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-text'>
                Discover a variety of delicious dishes crafted with fresh ingredients and authentic flavors. Whether you're craving something savory or sweet, our menu offers something for everyone. Take your taste buds on a journey and find your new favorite meal today!
            </p>
            <div className="scroll-wrapper">
                <div className="fade-left"></div>
                <div className="fade-right"></div>
            <div  className='explore-menu-list'>
                {menu_list.map((item,index)=>{
                   return ( <div onClick={() =>setCategory(prev=>prev === item.menu_name ? "all" : item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img  className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>


                    </div>
                )})}
            </div>
            <hr />
            </div>

    </div>
)
}

export default ExploreMenu
