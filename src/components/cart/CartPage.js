import React, { useContext } from 'react';
import CartItem from './CartItem';
import { Container, Table,CloseButton } from 'react-bootstrap'
import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import classes from "./CartPage.module.css"

const CartPage = (props) => {
   const cartCtx = useContext(CartContext);
    const cartItemRemoveHandler = (id) => {
    cartCtx.removeItems(id);
  };

  return (
   <Modal>
     <Container>
        <h2 className='text-center'>CART</h2>
        <CloseButton onClick={props.onClose}/>
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
           return <CartItem key={index} id={index} item={item} onRemove={() => cartItemRemoveHandler(item.id)} />
        })}
            </tbody>
        </Table>
          <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
    </Container>
   </Modal>
  )
}

export default CartPage
