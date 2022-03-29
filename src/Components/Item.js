import {Button, Card, CardTitle, Col, Icon} from "react-materialize";
import '../styles/Item.css'

const Item = ({product}) => {

    return (
        <>

            <Col
                l={4}
                m={6}
                s={12}>
                <Card className="card card-image img"
                      closeIcon={<Icon>close</Icon>}
                      header={<CardTitle image={product.pictureUrl}
                                         reveal
                                         waves="light"/>}
                      reveal={
                          <>
                              <h3>
                                  Precio: ${product.price}
                              </h3>
                              <p>
                                  {product.description}
                              </p>

                              <div className="btnDetail">
                                  <Button
                                      node="button"
                                      style={{
                                          marginRight: '5px'
                                      }}
                                      waves="light">
                                      Ver Detalle
                                  </Button>
                              </div>
                          </>

                      }
                      title={product.title}
                >
                </Card>
            </Col>
        </>
    );
}

export default Item;