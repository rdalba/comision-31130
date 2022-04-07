import {Card, CardTitle, Col, Icon } from "react-materialize";
import "./Item.css";
import { Link } from "react-router-dom";

// debe coincidir con los atributos del json/API
const Item = ({ product }) => {
  return (
    <>
      <Col l={4} m={6} s={12}>
        <Card
          className="card card-image img"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={product.img} reveal waves="light" />}
          reveal={
            <>
              <h3>Precio: {product.precio}</h3>
              <p>{product.descripcion}</p>
              <p>{product.descripcion}</p>
              <h5>{product.marca}</h5>
              <p>{product.observacion}</p>

              <div className="btnDetail">
                <Link to={`/item/${product.id}`}>Ver Detalle</Link>
              </div>
            </>
          }
          title={product.articuloTitulo}
        ></Card>
      </Col>
    </>
  );
};

export default Item;
