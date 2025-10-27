import React from 'react';
import CartItem from './CartItem';
import { Container, Table } from 'react-bootstrap'
import Modal from '../UI/Modal';

const CartPage = () => {
    const cartElements = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },

        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },

        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
        }
    ]   
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
            <tbody className=' align-middle text-center'>
                 {cartElements.map((item, index) =>{
           return <CartItem key={index} item={item} />
        })}
            </tbody>
        </Table>
       
    </Container>
   </Modal>
  )
}

export default CartPage
