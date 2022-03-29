import ItemCount from "./ItemCount";
import {useEffect, useState} from "react";
import {Products} from '../mocks/products'
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            task.then(result =>  {
                setItems(items.concat(result))
            })
        }, 2000);
    }, [])


    const task = new Promise((resolve) => {
        resolve(Products);
    });

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
