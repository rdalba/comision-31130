import { contexto } from "../CartContext/CartContex";
import { useContext } from "react";

const Cart = () => {
  const { items } = useContext(contexto);

  return (
    <>
      <h1>Carrito</h1>
      {items.map(i => <p>{JSON.stringify(i)}</p>)}
    </>
  );
};

export default Cart;
