import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink
          to="/"
          className="navbar-logo"
          aria-label="Rachel Cars — Inicio"
        >
          <Logo />
        </NavLink>

        <nav className="navbar-links" aria-label="Navegación principal">
          <NavLink to="/" end className="navbar-link">
            Inicio
          </NavLink>
          <NavLink to="/cars" className="navbar-link">
            Autos
          </NavLink>
          <NavLink to="/contact" className="navbar-contact">
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
