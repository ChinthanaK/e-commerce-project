import Card from 'react-bootstrap/Card';
import {Button, Col } from 'react-bootstrap';

const ProductItem = (props) => {
  return (
    
         <Col xs={12} sm={6} md={6} lg={4}>
      <Card className="text-center mb-2">
        <Card.Title className="mt-2">{props.title}</Card.Title>
        <Card.Img
          variant="top"
          src={props.image}
          style={{
            maxWidth: "250px",
            maxHeight: "250px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            margin: "0 auto",
          }}
        />
        <Card.Body className="d-flex justify-content-between align-items-center">
          <span>${props.price}</span>
          <Button variant="info" className="fw-bold"style={{color:"white"}}>ADD TO CART</Button>
        </Card.Body>
      </Card>
    </Col>


  )
}

export default ProductItem
