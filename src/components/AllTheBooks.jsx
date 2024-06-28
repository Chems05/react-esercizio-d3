import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";

const AllTheBooks = () => (
  <Container>
    <h1> books </h1>
    <Row>
      {fantasy.map((book) => (
        <Col key={book.asin} md={4} xs={13} >
<SingleBook book={book}/>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;
