import './App.css';
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
    const welcome = "Bienvenido a la Tienda de Hockey" 
    
    const messageItemDetail = "Item Detail Container";
    return (
        <>
            <NavBar>
                <CartWidget/>
            </NavBar>
        
            <ItemListContainer greeting={welcome}/>
          

            <ItemDetailContainer message={messageItemDetail}/>
        </>

    );
}

export default App;
