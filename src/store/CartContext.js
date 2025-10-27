import React from 'react'

const CartContext = React.createContext({
    cartItems:[],
    totalAmount:0,
    addItems:() =>{},
    removeITems:() =>{}
})

export default CartContext
