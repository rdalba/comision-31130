import "./Cart.css";
import { contexto } from "../../context/CartContext";
import React, { useContext, useState } from "react";
import { Button, Icon, Row, Table } from "react-materialize";
import { Link } from "react-router-dom";
import UserForm from "../UserForm/UserForm";
import { OrdersHockey } from "../../persistence/orders";
import { ProductsHockey } from "../../persistence/products";
import M from "materialize-css";

const Cart = () => {

  const {items, removeItem, getItemsQty, getTotalCompra, clear} = useContext(contexto);
  const [formEnabled, setFormEnabled] = useState(false);

 
  const handleDelete = (item) => {
    removeItem(item.id)
}

const userInfoCallBack = async (buyer) => {
    const itemsCart = items.map((item) => ({id: item.id, title: item.title, price: item.price, quantity: item.quantity}));
    await finalizarCompra(buyer, itemsCart, getTotalCompra());
}

const enableUserForm = () => {
    setFormEnabled(true)
}

const finalizarCompra = async (buyer, items, total) => {
    try {
        await OrdersHockey().saveOrder(buyer, items, total);
        await ProductsHockey().updateStock(items);
        setFormEnabled(false);
        clear()
        M.toast({html: 'Compra realizada con Éxito!'})
    } catch (e) {
        M.toast({html: e.message})
    }
}


  return (
    <>
      <h1>Carrito</h1>

      {getItemsQty() === 0 ? (
        <>
          <h3>No hay productos agregados al carrito</h3>
          <Link to={"/"}>
            <h4>Volver al Inicio</h4>
          </Link>
        </>
      ) : (
        <Row>
          <Table
            centered={true}
            hoverable={true}
            responsive={true}
            striped={true}
          >
            <thead>
              <tr>
                <th data-field="id">Código del Producto</th>
                <th data-field="title">Nombre del Producto</th>
                <th data-field="price">Precio Unitario</th>
                <th data-field="stock">Cantidad</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button onClick={() => handleDelete(item)}>
                        <Icon small>cloud</Icon>
                      </Button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
          <h5>Precio Total: {getTotalCompra()}</h5>
          <Button onClick={enableUserForm}>Finalizar Compra</Button>
          {formEnabled && <UserForm userInfoCallBack={userInfoCallBack} />}
        </Row>
      )}
    </>
  );
};

export default Cart;