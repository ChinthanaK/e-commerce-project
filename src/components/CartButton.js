import React, { useState }  from 'react'
import {Button,Badge} from 'react-bootstrap';
import CartPage from '../cart/CartPage';
const CartButton = ({count=0}) => {
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
        {count}
      </Badge>
    </Button>
    {show && <CartPage />}
   </>
  )
}

export default CartButton
