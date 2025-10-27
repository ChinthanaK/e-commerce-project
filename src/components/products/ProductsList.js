import React from 'react';
import ProductItem from './ProductItem';
import { Container, Row} from 'react-bootstrap';

const ProductsList = (props) => {
  return (
     <div>
        <Container className="mt-3">
      <Row className="justify-content-center" style={{ gap: '10px' }}>
        {props.productsArr.map((item, index) => (
          <ProductItem
            key={index}
            title={item.title}
            price={item.price}
            image={item.imageUrl}
          />
        ))}
      </Row>
    </Container>
     </div>
  )
  
}

export default ProductsList
