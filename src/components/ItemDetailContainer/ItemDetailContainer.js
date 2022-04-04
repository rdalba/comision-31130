import {useEffect, useState} from "react";
import {ProductService} from "../../service/ProductService/ProductService";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({message}) => {

    const [item, setItem] = useState({})

    useEffect(() => {
        getItems();
    }, [])

    async function getItems() {
        const response = await ProductService().get();
        setItem(getItemRandom(response));
    }

    const getItemRandom = (items) => {
        return items[Math.floor((Math.random()*items.length))];
    }

    return(
        <>
            <h1>{message}</h1>
            <ItemDetail product={item}/>
        </>
    )

}

export default ItemDetailContainer;