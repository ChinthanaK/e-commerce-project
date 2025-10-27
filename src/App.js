import CartButton2 from "./components/pages/CartButton2";
import Content from "./components/pages/Content";
import Footer from "./components/pages/Footer";
import Navbar from "./components/pages/Navbar";
import ProductsList from "./components/products/ProductsList";
import CartProvider from "./store/CartProvider";



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


  return (
    <CartProvider>
      <Navbar />
      <Content />
      <ProductsList productsArr={productsArr} />
      <CartButton2 />
      <Footer />
    </CartProvider>
  );
}

export default App;
