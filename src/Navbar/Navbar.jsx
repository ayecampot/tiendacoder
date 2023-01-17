import Cart from "../CartWidget/Cart";
import Sections from "./Sections/Sections";
import Categories from "./Categories/Categories";
import collar from '../images/collar.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <a className="a-size" href="#"><img className="w-logo" src={collar} alt="collar de perrito size" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <Sections/>
        <Categories/>
        </ul>
        <Cart cantCarrito={2}/>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;