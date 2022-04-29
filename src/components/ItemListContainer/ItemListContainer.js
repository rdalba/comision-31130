//import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { ProductService } from "../../service/ProductService/ProductService";
import { useParams } from "react-router-dom";

import {ProductsDao} from "../Firebase/Products";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { id: categoryIdDescription } = useParams(); // verificar el Id en productos

  useEffect(() => {
    fetchData(categoryIdDescription);
  }, [categoryIdDescription]);

  const fetchData = async (categoryName) => {
    let response = await ProductsDao().getProducts(categoryName);
    return setItems(response);
  };

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
