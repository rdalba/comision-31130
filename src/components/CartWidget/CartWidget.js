import { Badge, Icon } from "react-materialize";
import { contexto } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { items, getItemsQty } = useContext(contexto);
  return (
    <>
                {
                (items.length === 0) ?
                <> </> :
                <Badge newIcon={<Icon medium>shopping_cart</Icon>} className="red" caption={"Items"}>
                    {getItemsQty()}
                </Badge>
            }

      
    </>
  );
};

export default CartWidget;