//import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { ProductService } from "../../service/ProductService/ProductService";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { id: categoryDescription } = useParams(); // verificar el Id en productos

  useEffect(() => {
    fetchData(categoryDescription);
  }, [categoryDescription]);

  const fetchData = async (categoryName) => {
    let response = await ProductService().get();
    if (categoryName !== undefined) response = response.filter((item) => categoryName === item.category.name);
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
