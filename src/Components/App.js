import './App.css';
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
    const welcomeMessage = "Bienvenido a la Tienda de Hockey"
    return (
        <>
            <NavBar>
                <CartWidget/>
            </NavBar>
            <ItemListContainer greeting={welcomeMessage}/>
        </>

    );
}

export default App;
