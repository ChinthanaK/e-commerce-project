import React from 'react';
import {Outlet } from "react-router-dom";
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';


const RootLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet /> 
        <Footer />
      </>
  )
}

export default RootLayout
