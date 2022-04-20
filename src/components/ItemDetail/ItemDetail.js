import "./ItemDetail.css";
import { Button, Card, CardTitle, Col, Icon, Row } from "react-materialize";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
//import CartProvider from "../../context/CartContext";
import { contexto } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [finished, setFinished] = useState(false);

  const { addItem } = useContext(contexto);

  const onAdd = (cantidad) => {
    console.log(`Esta comprando {cantidad} items`);
    addItem(product, cantidad);
    setFinished(true);
  };

  return (
    <>
      <Col l={6} m={6} s={12}>
        <Card
          className="card card-image img card-margin"
          closeIcon={<Icon>close</Icon>}
          header={
            <CardTitle
              image={product.pictureUrl}
              required={false}
              reveal
              waves="light"
            />
          }
          horizontal
        >
          <>
            <Row>
              <Col l={9} m={9}>
                <h3>Precio: {product.price}</h3>
                <br></br>
                <br></br>
                <h4>{product.title}</h4>
                <br></br>
                <br></br>
                <p>{product.description}</p>
              </Col>

              <Col l={3} m={3}>
                {!finished ? (
                  <ItemCount stock={10} initial={1} onAdd={onAdd} />
                ) : (
                  <>
                    <Link to="/cart">
                      <Button>Finalizar Compra</Button>
                    </Link>
                  </>
                )}
              </Col>
            </Row>
          </>
        </Card>
      </Col>
    </>
  );
};

export default ItemDetail;
