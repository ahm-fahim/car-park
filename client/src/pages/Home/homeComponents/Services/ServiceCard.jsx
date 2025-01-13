import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ serviceInfo }) => {
  const {
    service_title,
    description,
    cost,
    time,
    engineer_name,
    facilities,
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
          <button className="btn btn-success">Get In Details</button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  serviceInfo: PropTypes.object,
};

export default ServiceCard;
