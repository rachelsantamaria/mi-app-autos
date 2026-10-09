import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Experience from "../components/Experience";
import CardCarList from "../../cars/components/CardCarList";
import carsData from "../../../../public/data/cars.json";
import type { Car } from "../../cars/types/Car";

const cars = carsData as Car[];
const featuredCars = cars.filter((car) => car.featured).slice(0, 3);

const Home = () => {
  return (
    <main>
      <Hero />

      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-header">
            <div>
              <p className="section-kicker">Selección destacada</p>
              <h2 className="section-title">Conozca la colección</h2>
            </div>
            <Link className="featured-link" to="/cars">Ver todos los autos →</Link>
          </div>

          <CardCarList cars={featuredCars} />
        </div>
      </section>

      <Experience />
    </main>
  );
};

export default Home;
