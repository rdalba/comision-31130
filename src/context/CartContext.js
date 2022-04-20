import {createContext, useState} from "react";


export const contexto = createContext([]);

const {Provider} = contexto;


const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addItem = (item, quantity) => {
        const nuevoItem = {
            ...item,
            quantity
        }
        if (isInCart(nuevoItem.id)) {
            const producto = items.find(item => item.id === nuevoItem.id);
            let index = items.indexOf(producto);
            const modifiableList = [...items];
            modifiableList[index].quantity += quantity
            setItems(modifiableList)
        } else {
            setItems([...items, nuevoItem])
        }
    }

    const removeItem = (itemId) => {
        const filteredList = items.filter(item => item.id !== itemId);
        setItems(filteredList);
    }

    const clear = () => {
        setItems([])
    }

    const isInCart = (id) => {
        const find = items.find(item => item.id === id);
        return find !== undefined;
    }

    const getItemsQty = () => {
        return items.reduce((n, item) => {
            return n + item.quantity;
        }, 0);
    }

    const getTotalCompra = () => {
        return items.reduce((n, item) => {
            return n + (item.price * item.quantity);
        }, 0);
    }

    return (
        <Provider value={{items, addItem, removeItem, clear, getItemsQty, getTotalCompra}}>
            {children}
        </Provider>
    )

}

export default CartProvider;