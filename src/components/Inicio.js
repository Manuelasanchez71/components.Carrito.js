import React from "react";
import { Carousel } from "react-bootstrap";
import { Col, Image } from "react-bootstrap";
import "../style/Cartas.css";
import Navegation from "../components/Navegation";
import { Link, withRouter } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="Carrusel">
      <Navegation />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Imagenes/descarga (1).png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> </h3>
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Imagenes/descarga.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3> </h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Imagenes/descarga (3).png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3> </h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Col xs={6} md={4}>
        <Image src="./Imagenes/img1.jpg" roundedCircle className="Carta" />
        <Link className="Carta" to="/Lista2">
          <h5>Frutas y Verduras</h5>
        </Link>
      </Col>
      <Col xs={6} md={4}>
        <Image src="./Imagenes/img2.jpg" roundedCircle className="Carta" />
        <Link className="Carta" to="/Lista3">
          <h5>Pastas</h5>
        </Link>
      </Col>
      <Col xs={6} md={4}>
        <Image src="./Imagenes/img3.png" roundedCircle className="Carta" />
        <Link className="Carta" to="/Lista4">
          <h5>Lácteos</h5>
        </Link>
      </Col>
      <Col xs={6} md={4}>
        <Image
          Link
          to="/Lista"
          src="./Imagenes/img4.png"
          roundedCircle
          className="Carta"
        />
        <Link className="Carta" to="/Lista">
          <h5>Aseo</h5>
        </Link>
      </Col>
      <Col xs={6} md={4}>
        <Image src="./Imagenes/img5.jpg" roundedCircle className="Carta" />
        <h5>Carnés</h5>
      </Col>
      <Col xs={6} md={4}>
        <Image src="./Imagenes/img6.png" roundedCircle className="Carta" />
        <h5>Bebidas</h5>
      </Col>
    </div>
  );
};

export default Inicio;
