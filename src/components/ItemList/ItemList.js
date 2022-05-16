import Item from "../Item/Item";
import { Row } from "react-materialize";

const ItemList = ({ items }) => {
  return (
    <>
      <Row>
        {items.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </Row>
    </>
  );
};

export default ItemList;
