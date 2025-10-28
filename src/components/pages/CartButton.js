import React, { useContext, useState }  from 'react'
import {Button,Badge} from 'react-bootstrap';
import CartPage from '../cart/CartPage';
import CartContext from '../../store/CartContext';
const CartButton = () => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.cartItems.reduce((currCount, item) =>{
    return currCount+item.quantity;
  }, 0)
  const [show, setShow] = useState(false);
  const showCartPageHandler = () =>{
    setShow(true);
  }
  const hideCartPageHandler = () =>{
    setShow(false);
  }
  return (
   <>
    <Button variant="info" className="text-white position-relative" onClick={showCartPageHandler}>
      Cart
      <Badge
        bg="danger"
        className='position-absolute rounded-pill top-0 '
      >
        {numberOfCartItems}
      </Badge>
    </Button>
    {show && <CartPage onClose={hideCartPageHandler} />}
   </>
  )
}

export default CartButton
