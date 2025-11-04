import { useParams } from "react-router-dom";
import {Card} from "react-bootstrap";


function ProductDetailPage({ productsArr }) {
  const params = useParams();
  console.log(params.id);
  console.log("products in ProductDetailPage:", productsArr);
  const product = productsArr.find(p => p.id === parseInt(params.id));
  console.log(product);

  if (!product) return <p>Product not found!</p>;

  return (
    <div style={{padding:"10px", display:"flex", justifyContent:"center"}}>
         <Card style={{ width: '18rem'}} >
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>₹{product.price}</Card.Text>
        <Card.Text>
            <h3>Customer Reviews</h3>
            <p>⭐ Great product! Really loved it.</p>
            <p>⭐ Value for money.</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    //  {/* <div >
    //   <img
    //     src={product.imageUrl}
    //     alt={product.title}
    //     width="250"
    //     height="250"
    //   />
    //   <h2>{product.title}</h2>
    //   <p >Price: ₹{product.price}</p>

    //   <div className="reviews">
      
    //   </div>
    // </div> */}
  );
}

export default ProductDetailPage;