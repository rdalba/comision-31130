import { contexto } from "../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { items } = useContext(contexto);

  return (
    <>
      <h1>Carrito</h1>
      {items.map(i => <p>{JSON.stringify(i)}</p>)}

    </>
  )
}

export default Cart;
