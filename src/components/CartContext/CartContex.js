import { createContext, useState } from "react";

export const contexto = createContext([]);

const {Provider} = contexto;

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {
    const nuevoItem = {
      ...item,
      quantity
    }
    console.log(nuevoItem);
    if (isInCart(nuevoItem.id)) {
      const producto = items.find((item) => item.id === nuevoItem.id);
      let index = items.indexOf(producto);
      const modifiableList = [...items];
      modifiableList[index].quantity += quantity;
      console.log(modifiableList);
      setItems(modifiableList);
    } else {
      setItems([...items, nuevoItem]);
      console.log(items);
    }
  };

  const removeItem = (itemId) => {
    const filteredList = items.filter(item => item.id === itemId);
    setItems(filteredList);
  };

  const clear = () => {
    setItems([]);
  };

  const isInCart = (id) => {
    const find = items.find((item) => item.id === id);
    console.log(find !== undefined);
    return find !== undefined;
  };

  return (
  <Provider value={{ items, addItem }}>
    {children}
    </Provider>
  )
};

export default CartProvider;
