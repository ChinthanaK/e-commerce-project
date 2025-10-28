import React,{useState, useContext} from 'react';
import ProductItem from './ProductItem';
import CartContext from '../../store/CartContext';
import CartPage from '../cart/CartPage';
import { Container, Row, Button} from 'react-bootstrap';

const ProductsList = (props) => {
    const {cartItems} = useContext(CartContext);
   const [show, setShow] = useState(false);
    const showCartPageHandler = () =>{
      setShow(true);
    }
      const hideCartPageHandler = () =>{
    setShow(false);
  }
  return (
     <div>
        <Container className="mt-3">
      <Row className="justify-content-center" style={{ gap: '10px' }}>
        {props.productsArr.map((item, index) => {
         return <ProductItem
            key={index}
            id={index}
            title={item.title}
            price={item.price}
            image={item.imageUrl}
          />
        })}
      </Row>
    </Container>
     <div className='d-flex justify-content-center'>
      <Button variant='secondary' className='mt-5 mb-5 pt-2 pb-2 pl-1 pr-1 fw-bold' style={{color:'#3B82F6' }} onClick={showCartPageHandler}>See the Cart</Button>
      {show && cartItems.length>0 && <CartPage onClose={hideCartPageHandler} />}
      
    </div>
     </div>
  )
  
}

export default ProductsList
