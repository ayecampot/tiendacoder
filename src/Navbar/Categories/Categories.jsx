
const Categories = () => {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Categorias
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Camas</a></li>
          <li><a className="dropdown-item" href="#">Mantas</a></li>
          <li><a className="dropdown-item" href="#">Juguetes</a></li>
          <li><a className="dropdown-item" href="#">Accesorios</a></li>
        </ul>
      </li>
    );
}

export default Categories;
