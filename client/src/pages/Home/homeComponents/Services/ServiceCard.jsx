
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ serviceInfo }) => {
  const {
    _id,
    service_title,
    cost,
    image_url,
  } = serviceInfo;
  return (
    <div className="card bg-base-100 image-full w-full h-60 shadow-xl">
      <figure>
        <img src={image_url} alt="service image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_title}</h2>
              <p className="text-success"><span className="font-bold">Price - </span>{ cost} $</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`} className="btn btn-success">Checkout Now</Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  serviceInfo: PropTypes.object,
};

export default ServiceCard;
