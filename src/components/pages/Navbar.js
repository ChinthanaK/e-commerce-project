import React from 'react';
import { NavLink} from 'react-router-dom';
import CartButton from './CartButton';


const Navbar = ({showCartButton}) => {
  
  return (
    <>
    <div className='d-flex justify-content-between  align-items-center bg-dark w-100 px-5'  style={{
    height: "60px"}}>
       <nav className="flex-grow-1 d-flex justify-content-center align-items-center">
            <NavLink to="/" className="text-white mx-4 text-decoration-none ">HOME</NavLink>
            <NavLink to="/store" className="text-white mx-4 text-decoration-none">STORE</NavLink>
            <NavLink to="/about" className="text-white mx-4 text-decoration-none">ABOUT</NavLink>
             <NavLink to="/contactus" className="text-white mx-4 text-decoration-none">Contact Us</NavLink>
            
        </nav>
    {showCartButton && <CartButton />}

    </div>
    
     <div
    className="text-white d-flex flex-column align-items-center justify-content-start position-relative"
    style={{
      height: "350px", 
      width: "100%",
      backgroundColor: "#777777",
      
      
    }}
  >
    <h1
      style={{
       
        fontSize: "90px",
        fontWeight: "bold",
        marginBottom: "50px",
      }}
    >
      The Generics
    </h1>

    <h4
      className="border border-info px-3 py-2 text-white"
      style={{
        fontSize: "20px",
        fontWeight: "500",
        marginBottom: "5px",
      }}
    >
      Get our Latest Album
    </h4>

    <i
      className="bi bi-play-circle"
      style={{
        fontSize: "5rem",
        color: "skyblue",
        cursor: "pointer",
      }}
    ></i>
  </div>

</>
  )
}

export default Navbar
