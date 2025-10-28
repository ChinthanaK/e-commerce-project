import React from 'react'
import { Button } from 'react-bootstrap';



const CartItem = (props) => {
    const { item, index } = props;
    const { title, price, quantity, imageUrl } = item;


  return (
    <>
    <tr key={index}>
       <td className='d-flex align-items-center gap-3'>
        <img src={imageUrl} alt={title}  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }} />  
                  <span>{title}</span>  
       </td>
       <td className="py-2">${price}</td> 
      <td>
         <div className='d-flex align-items-center justify-content-center gap-2'>
        <div className='border rounded border-info py-1 px-3'>{quantity}</div>
       <Button variant='danger' onClick={props.onRemove}>Remove</Button>
       </div>
      </td>
    </tr>
  
  </>
  )
}

export default CartItem
