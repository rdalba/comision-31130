import './Cart.css'
import {contexto} from "../../context/CartContext";
import React, {useContext} from "react";
import {Button, Icon, Row, Table} from "react-materialize";
import {Link} from "react-router-dom";

const Cart = () => {

    const {items, removeItem, getItemsQty, getTotalCompra} = useContext(contexto);

    const handleDelete = (item) => {
        removeItem(item.id)
    }

    return (
        <>
            <h1>Carrito</h1>
            {
                getItemsQty() === 0 ?
                    <>
                        <h3>No hay productos agregados al carrito</h3>
                        <Link to={"/"}>
                            <h4>Volver al Inicio</h4>
                        </Link>
                    </>
                    :
                    <Row>
                        <Table centered={true}
                               hoverable={true}
                               responsive={true}
                               striped={true}>
                            <thead>
                            <tr>
                                <th data-field="id">
                                    Código del Producto
                                </th>
                                <th data-field="title">
                                    Nombre del Producto
                                </th>
                                <th data-field="price">
                                    Precio Unitario
                                </th>
                                <th data-field="stock">
                                    Cantidad
                                </th>
                                <th>
                                    Eliminar
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map(item =>
                                <>
                                    <tr>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td>
                                            <Button onClick={() => handleDelete(item)}>
                                                <Icon small>
                                                    cloud
                                                </Icon>
                                            </Button>
                                        </td>
                                    </tr>
                                </>
                            )}
                            </tbody>
                        </Table>
                        <h5>Precio Total: {getTotalCompra()}</h5>
                    </Row>
            }


        </>
    )
}


export default Cart;