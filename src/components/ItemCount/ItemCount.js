import {Button, Card, Col, Icon, Row, TextInput} from "react-materialize";
import './ItemCount.css'
import {useState} from "react";

const ItemCount = ({stock, initial, onAdd }) => {
    const btnMessage = "Agregar Al Carrito"
    const cardTitle = "Jersey Argentina"
    const [disponible, setDisponible] = useState(stock);
    const [cantidad, setCantidad] = useState(initial)


    const substractItem = () => {
        if (cantidad -1 >= 0) {
            setCantidad(cantidad - 1)
        }
    }

    const addItem = () => {
        if (cantidad + 1 <= disponible) {
            setCantidad(cantidad + 1)
        }
    }

    const saveItems = () => {
        if (disponible >= cantidad) {
            setDisponible(disponible - cantidad);
            onAdd(cantidad);
        } else {
            alert('Cantidad Disponible superada')
        }
    }

    const handleOnChange = (event) => {
        const value = event.target.value;

        if (value > cantidad) {
            addItem();
        } else {
            substractItem();
        }
    }


    return (
        <>
            <Row className="itemCount-align" >
                <Col className="center-align" l={3} m={6} s={12}>
                    <Card
                        className="grey darken-1 s4"
                        textClassName="white-text"
                        title={cardTitle}>
                        <Row>
                            
                            <Col className="center-align" l={3}>
                                <Button onClick={substractItem}
                                    node="button"
                                    style={{
                                        marginRight: '5px',
                                        marginTop: '25px'
                                    }}
                                    waves="light"
                                >
                                    <Icon>
                                        remove
                                    </Icon>
                                </Button>
                            </Col>
                            <Col className="center-align" l={6}>
                                <TextInput id="TextInput-25" type="number"
                                           inputClassName="textInput"
                                           value={cantidad.toString()}
                                           onChange={handleOnChange} />
                            </Col>
                            
                            <Col className="center-align" l={3}>  
                                <Button onClick={addItem}
                                    node="button"
                                    style={{
                                        marginRight: '5px',
                                        marginTop: '25px'
                                    }}
                                    waves="light">
                                    <Icon>
                                        add
                                    </Icon>
                                </Button>
                            </Col>
                        </Row>

                        
                        <Button  // Boton Agregar
                            onClick={saveItems}
                            node="button"
                            style={{
                                marginRight: '0px'
                            }}
                            waves="light">
                            {btnMessage}
                        </Button>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ItemCount;