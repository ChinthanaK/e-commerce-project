import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItems = (item) =>{
         setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevItems.concat(item);
      }
      
      console.log("total", totalAmount);
      console.log("Item being added:", item.id, item.title, item.quantity, item.price);
      return updatedItems;
    });
        setTotalAmount((prevAmount) => prevAmount + item.price * item.quantity);
    }

    const removeItems = (id) => {
        let removedItemPrice = 0;
  setCartItems((prevItems) => {
    const existingItemIndex = prevItems.findIndex(i => i.id === id);
    const existingItem = prevItems[existingItemIndex];
    if (!existingItem) return prevItems;
    console.log("item removed")
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = prevItems.filter(i => i.id !== id);
    } else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems = [...prevItems];
      updatedItems[existingItemIndex] = updatedItem;
    }
    removedItemPrice = existingItem.price;
    
     console.log("Item being removed:", id);
    return updatedItems;
  });
  setTotalAmount((prevTotal) => prevTotal -removedItemPrice); 
 
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
