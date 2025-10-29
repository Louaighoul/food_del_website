import React, { useContext } from 'react'
import './cart.css'

import { StoreContext } from '../../context/storecontext'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const cart = () => {
  const {cartItems, food_list, removeFromCart , getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {
        food_list.map((item,index)=>{
          if (cartItems[item._id]>0) {
            return (
              <div>
              <div className="cart-items-title cart-items-item" key={index}>
              <img src={item.image} alt={item.name} className="cart-items-image" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item._id)}>Remove</button>
             
              </div>
                <hr />
              </div>
             
            )
          }
        }

        )
      }
      <div className="promo-code-section">
        <input 
          type="text" 
          placeholder="Enter promo code" 
          className="promo-input"
        />
        <button className="apply-promo-btn">
          Apply Code
        </button>
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <div className="cart-total-item">
            <p>Subtotal:</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-item">
            <p>Delivery Fee:</p>
            <p>$5.00</p>
          </div>
          <hr />
          <div className="cart-total-item">
            <p>Total:</p>
            <p>${getTotalCartAmount() + 5}</p>
          </div>
          <button className="checkout-btn" onClick={() =>navigate('/order')}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default cart
