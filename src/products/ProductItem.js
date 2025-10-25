import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductItem = (props) => {
  return (
    <Row xs={1} md={2} className="g-6">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Img variant="top" src={props.image} style={{
                maxWidth: "250px",
                maxHeight: "250px",
                width: "100px",
                height: "100px",
                objectFit: "cover"  
                }} 
            />
              <Card.Text>
               {props.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ProductItem
