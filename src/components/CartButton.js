import React from 'react'
import {Button,Badge} from 'react-bootstrap';
const CartButton = ({count=0}) => {
  return (
   <Button variant="info" className="text-white position-relative">
      Cart
      <Badge
        bg="danger"
        className='position-absolute rounded-pill top-0 '
      >
        {count}
      </Badge>
    </Button>
  )
}

export default CartButton
