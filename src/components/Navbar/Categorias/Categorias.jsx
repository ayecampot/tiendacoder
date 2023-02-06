import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-primary">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/categorias/camas"}>Camas</Link></li>
            <li><Link className="dropdown-item" to={"/categorias/comederos"}>Comederos</Link></li>
            <li><Link className="dropdown-item" to={"/categorias/juguetes"}>Juguetes</Link></li>
            <li><Link className="dropdown-item" to={"/categorias/alimento"}>Alimento</Link></li>
          </ul>
        </li>
    );
}

export default Categorias;
