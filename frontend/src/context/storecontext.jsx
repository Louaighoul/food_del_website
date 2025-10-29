import  { createContext, useEffect } from 'react';
import { food_list } from '../assets/assets';
import { useState } from 'react';





export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart =(itemId)=> {
        if(!cartItems[itemId]) {
           setCartItems((prev)=> ({...prev, [itemId]:1}))
        }else{
            setCartItems((prev)=> ({...prev, [itemId]: prev[itemId]+1}))
        }

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1} ));
        }

        useEffect(() => {
console.log("Cart items updated:", cartItems);
        }, [cartItems]);

        const getTotalCartAmount = () => {
            let totalAmount=0;
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                let itemInfo=food_list.find((product)=> product._id === item);
                totalAmount+= itemInfo.price*cartItems[item];
                
            }
        }
        return totalAmount;
    }

    const contextvalue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount
    }

    
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;





