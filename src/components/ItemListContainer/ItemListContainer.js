//import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { ProductService } from "../../service/ProductService/ProductService";
import { useParams } from "react-router-dom";
import { ProductsHockey } from "../Firebase/Products";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { id: categoryDescription } = useParams(); // verificar el Id en productos

  useEffect(() => {
    fetchData(categoryDescription);
  }, [categoryDescription]);

  const fetchData = async (categoryName) => {
    let response = await ProductsHockey().getProducts(categoryName);
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
