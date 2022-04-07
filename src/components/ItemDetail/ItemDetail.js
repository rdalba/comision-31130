import "./ItemDetail.css";
import { Card, CardTitle, Col, Icon, Row } from "react-materialize";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const onAdd = (cantidad) => {
    console.log(`Esta comprando ${cantidad} items`);
  };

  return (
    <>
      <Col l={6} m={6} s={12}>
        <Card
          className="card card-image img card-margin"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={product.pictureUrl} reveal waves="light" />}
          horizontal
        >
          <>
            <Row>
              <Col l={9} m={9}>
                <h3>Precio: ${product.price}</h3>
                <p>{product.description}</p>
                <p>{product.title}</p>
              </Col>

              <Col l={3} m={3}>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
              </Col>
            </Row>
          </>
        </Card>
      </Col>
    </>
  );
};

export default ItemDetail;
