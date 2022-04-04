import ItemCount from "../ItemCount/ItemCount";
import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {ProductService} from "../../service/ProductService/ProductService";

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        let response = await ProductService().get();
        return setItems(response)
    }

    const onAdd = (cantidad) => {
        console.log(`Esta comprando ${cantidad} items`)
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer;
