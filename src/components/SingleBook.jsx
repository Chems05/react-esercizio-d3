import { Card, Col, Button } from "react-bootstrap"


const SingleBook = ({book}) => {
return(
    <Col key={book.asin} md={4} xs={13} >
<Card>
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>{book.category}</Card.Text>
    <Button variant="primary">{book.price}</Button>
  </Card.Body>
</Card>
</Col>
);
};

export default SingleBook;