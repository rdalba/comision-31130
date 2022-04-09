import "./App.css";
import "materialize-css";
import "materialize-css/dist/css/materialize.css";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  const welcome = "Bienvenido a la Tienda de Hockey";

  const messageItemDetail = "Item Detail Container";
  return (
    <BrowserRouter>
      <NavBar>
        <CartWidget />
      </NavBar>

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={welcome} />}/>
        <Route
          path="/categories/:id" element={<ItemListContainer greeting={welcome} />}/>
        <Route
          path="/item/:id" element={<ItemDetailContainer message={messageItemDetail} />}/>
      </Routes>

    </BrowserRouter>
  );
};

export default App;
