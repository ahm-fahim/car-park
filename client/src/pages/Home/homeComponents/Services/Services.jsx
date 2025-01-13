import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div  className="my-10">
      <h1 className="text-4xl font-bold mb-10">Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {services.map((serviceData) => (
          <ServiceCard
            key={serviceData._id}
            serviceInfo={serviceData}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
