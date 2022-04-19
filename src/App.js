import "./App.css";
import "materialize-css";
import "materialize-css/dist/css/materialize.css";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";


const App = () => {
  const welcome = "Bienvenido a la Tienda de Hockey";

  const messageItemDetail = "Item Detail Container";
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar>
          <CartWidget/>
        </NavBar>

        <Routes>
          <Route 
          path="/" 
          element={<ItemListContainer greeting={welcome}/>}/>
          <Route
            path="/categories/:id"
            element={<ItemListContainer greeting={welcome} />}/>
         
          <Route
            path="/item/:id"
            element={<ItemDetailContainer message={messageItemDetail}/>}/>
         
          <Route 
          path="/cart" 
          element={<Cart/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
