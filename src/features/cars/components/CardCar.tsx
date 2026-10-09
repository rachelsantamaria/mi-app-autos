import { Link } from "react-router-dom";
import type { Car } from "../types/Car";

interface CardCarProps {
  car: Car;
}

const CardCar = ({ car }: CardCarProps) => {
  return (
    <article className="car-card">
      <div className="car-card-image-container">
        <img className="car-card-image" src={car.image} alt={`Ilustración de ${car.name}`} />
        <span className="car-card-badge">{car.type}</span>
        <span className="car-card-favorite" aria-hidden="true">♡</span>
      </div>

      <div className="car-card-body">
        <p className="car-card-brand">{car.location}</p>
        <h3 className="car-card-title">{car.name}</h3>

        <div className="car-card-specs">
          <span className="car-card-spec">{car.year}</span>
          <span className="car-card-spec">{car.mileage.toLocaleString("es-CR")} km</span>
          <span className="car-card-spec">{car.seats} pasajeros</span>
        </div>

        <div className="car-card-footer">
          <strong className="car-card-price">USD {car.price.toLocaleString("es-CR")}</strong>
          <Link className="car-card-link" to={`/cars/${car.id}`}>Ver detalle →</Link>
        </div>
      </div>
    </article>
  );
};

export { CardCar };
