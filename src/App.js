import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import ProductsList from "./components/products/ProductsList";
import CartProvider from "./store/CartProvider";
import RootLayout from "./components/layouts/RootLayout";
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/pages/Navbar";



function App() {
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
   
      ]
    },
     {
    path: "/store",
    element: (
      <>
        <Navbar showCartButton={true} />
        <Outlet />
      </>
    ),
    children: [{ index: true, element: <ProductsList  productsArr={productsArr}/> }],
  },
   
  ])

  return (
    <CartProvider>
   <RouterProvider router={router} />
   </CartProvider>
  );
}

export default App;
