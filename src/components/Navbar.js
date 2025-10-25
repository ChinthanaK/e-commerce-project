import React from 'react'
import Nav from 'react-bootstrap/Nav';
import CartButton from './CartButton'

const Navbar = () => {
  return (
    <>
      <Nav className="d-flex justify-content-center bg-dark w-100">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#features" className="text-white">Features</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">Pricing</Nav.Link>
    </Nav>
    <CartButton />
    </>

  )
}

export default Navbar
