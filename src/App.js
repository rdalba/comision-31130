
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './Components/CartWidget';
import ItemListContainer from './Components/ItemListContainer';

const App = () => {

  const welcome = "Bienvenido a la Tienda de Hockey"
  return (
    <>

      <NavBar>
        <CartWidget />
      </NavBar>

      <ItemListContainer greeting={welcome} />


    </>

  );
}

export default App;
