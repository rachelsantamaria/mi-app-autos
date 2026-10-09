import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo />
            <p>Catálogo académico de autos para aprender React y Capacitor.</p>
          </div>

          <nav className="footer-links" aria-label="Enlaces del pie de página">
            <h3>Explorar</h3>
            <Link to="/cars">Autos</Link>
            <Link to="/contact">Contacto</Link>
          </nav>

          <div className="footer-project">
            <h3>Proyecto</h3>
            <p>Ejemplo de enseñanza</p>
            <p>Costa Rica</p>
          </div>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Rachel Cars · Proyecto académico
        </p>
      </div>
    </footer>
  );
};

export default Footer;
