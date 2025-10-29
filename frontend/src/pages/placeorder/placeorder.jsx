import React from 'react'
import './placeorder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/storecontext'

const placeorder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form action="" className='placeorder'>
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address'/>
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
        <input type="text" placeholder='Phone number' />
      </div>
      <div className="placeorder-right">
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
            <p>${getTotalCartAmount() + 5  }</p>
          </div>
          <button >Proceed to Payment</button>
        </div>
      </div>
      
    </form>
  )
}

export default placeorder

