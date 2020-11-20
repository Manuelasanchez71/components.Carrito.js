import React from "react";
import Navegation from "../components/Navegation";
import { Link, withRouter } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Carrito2 = (prosp) => {
  const { history } = prosp;
  return (
    <div className="">
      <Navegation />
      <div className="Carrito">
        <h1>Mi Carrito</h1>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./Imagenes/papas.jpg" />
          <Card.Body>
            <Card.Title>Papas</Card.Title>
            <Card.Text>Tienda el mono</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>papas 1k</ListGroupItem>
            <ListGroupItem>Total $1.000</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="/.">Eliminar</Card.Link>
            <p></p>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./Imagenes/espagueti.jpg" />
          <Card.Body>
            <Card.Title>Espagueti</Card.Title>
            <Card.Text>Tienda el mono</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Espaguiti x1</ListGroupItem>
            <ListGroupItem>Total $1.500</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Link to="/Carrito">Eliminar</Link>
            <p></p>
            <Link to="/">Seguir Comprando</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default withRouter(Carrito2);
