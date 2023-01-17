import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="¡Hola Mundo mascotero!"/>
    </>
  );
}

export default App;

