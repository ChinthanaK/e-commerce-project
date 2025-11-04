import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import ProductsList from "./components/products/ProductsList";
import CartProvider from "./store/CartProvider";
import RootLayout from "./components/layouts/RootLayout";
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import ContactUs from "./components/pages/ContactUs";
import { useState } from "react";



function App() {
  const [users, setUsers]  =useState([]);
  const productsArr = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ]

  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[
         {path:'/',element:<HomePage/>},
         
        {path:'/about', element:<AboutPage />},
        {path:'/contactus', element:<ContactUs onAdd = {addUserDetailsHandler}/>}
   
      ]
    },
     {
    path: "/store",
    element: (
      <>
        <Navbar showCartButton={true} />
        <Outlet />
        <Footer />
      </>
    ),
    children: [{ index: true, element: <ProductsList  productsArr={productsArr}/> }],
  },
   
  ])

  async function addUserDetailsHandler(userDetails){
    const response = await fetch("https://e-commerce-project-f3d4b-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",{
      method:"POST",
      body:JSON.stringify(userDetails),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <CartProvider>
   <RouterProvider router={router} />
   </CartProvider>
  );
}

export default App;
