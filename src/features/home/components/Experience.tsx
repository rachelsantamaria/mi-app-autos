import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-container">
        <div className="experience-content">
          <p className="experience-kicker">Explore con calma</p>
          <h2>Su próximo camino empieza aquí</h2>

          <p>
            Compare modelos, guarde sus favoritos y solicite información desde
            la ficha de cada auto.
          </p>

          <ul className="check-list">
            <li>Catálogo fácil de explorar</li>
            <li>Características claras</li>
            <li>Contacto desde cada ficha</li>
          </ul>

          <Link className="experience-link" to="/contact">
            Consultar un modelo →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
