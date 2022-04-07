import { useEffect, useState } from "react";
import { ProductService } from "../../service/ProductService/ProductService";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ message }) => {
  const [item, setItem] = useState({});
  const { id: itemId } = useParams();

  useEffect(() => {
    getItems(itemId);
  }, []);

  const getItems = async (itemId) => {
    const response = await ProductService().get();
    setItem(getItem(response, itemId));
  };

  const getItem = (items, itemId) => {
    return items.find((item) => item.id === Number(itemId));
  };

  return (
    <>
      <h1>{message}</h1>
      <ItemDetail product={item} />
    </>
  );
};

export default ItemDetailContainer;
