import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import CartButton from './CartButton'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const showCartPageHandler = () =>{
    setShow(true);
  }
  const hideCartPageHandler = () =>{
    setShow(false);
  }
  return (
    <div className='d-flex justify-content-between bg-dark w-100 mb-1 px-5'>
       <Nav className="flex-grow-1 d-flex justify-content-center">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#features" className="text-white">Features</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">Pricing</Nav.Link>
            
    </Nav>
    <CartButton />
    </div>

  )
}

export default Navbar
