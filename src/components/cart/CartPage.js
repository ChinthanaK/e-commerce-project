import React, { useContext } from 'react';
import CartItem from './CartItem';
import { Container, Table } from 'react-bootstrap'
import Modal from '../UI/Modal';
import CartProvider from '../../store/CartProvider';

const CartPage = () => {
   const cartCtx = useContext(CartProvider);
   console.log(cartCtx.cartItems);
  return (
   <Modal>
     <Container>
        <h2 className='text-center'>CART</h2>
        <Table striped bordered hover responsive>
            <thead className='text-center'>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody className='align-middle text-center'>
                 {cartCtx.cartItems.map((item, index) =>{
           return <CartItem key={index} item={item} />
        })}
            </tbody>
        </Table>
       
    </Container>
   </Modal>
  )
}

export default CartPage
