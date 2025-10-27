import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItems = (item) =>{
        setCartItems((prevItems) =>{
         const existingIndex = prevItems.findIndex((i) =>i.id===item.id);
         const existingItem = prevItems[existingIndex];
         let updatedItems;

         if(existingItem){
            const updatedItem = {
                ...existingItem,
                quantity : existingItem.quantity+item.quantity
            }
            updatedItems = [...prevItems];
            updatedItems[existingIndex] = updatedItem;
         }else{
            updatedItems = cartItems.concat(item)
         }
         setTotalAmount((prevAmount) => prevAmount + item.price * item.amount);
         return updatedItems;
        })
    }

    const removeItems = (id) => {
  setCartItems((prevItems) => {
    const existingItemIndex = prevItems.findIndex(i => i.id === id);
    const existingItem = prevItems[existingItemIndex];
    if (!existingItem) return prevItems;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = prevItems.filter(i => i.id !== id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...prevItems];
      updatedItems[existingItemIndex] = updatedItem;
    }

    setTotalAmount(prevTotal => prevTotal - existingItem.price);
    return updatedItems;
  });
};
    const cartValue = {
        cartItems,
        totalAmount,
        addItems:addItems,
        removeItems:removeItems
    }

  return <CartContext.Provider value={cartValue}>{props.children}</CartContext.Provider>
}

export default CartProvider
