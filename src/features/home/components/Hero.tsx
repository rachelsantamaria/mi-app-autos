import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <div className="hero-content-inner">
          <p className="hero-eyebrow">Rachel Cars · Costa Rica</p>

          <h1 className="hero-title">El auto que mueve sus planes</h1>

          <p className="hero-description">
            Una colección de vehículos para explorar a su ritmo, comparar
            características y elegir su favorito.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/cars">
              Explorar autos
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
