import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const Checkout = () => {
    const service = useLoaderData();
    const { service_title,
        description,
        cost,
        time,
        engineer_name,
        facilities,
        image_url } = service;
    return (
        <div className="flex flex-col min-h-screen my-10">
            <div className="flex lg:flex-row flex-col bg-base-200 rounded-md p-10">
                <img className="h-80" src={image_url} alt="" />
                <div className="mx-2">
                    <h1 className="text-2xl font-bold">{service_title}</h1>
                    <p><span className="font-bold text-lg">Description : </span> {description}</p>
                    <p><span className="font-bold text-lg">Engineer Name : </span> {engineer_name}</p>
                    <p><span className="font-bold text-lg">Facilities : </span> {facilities}</p>
                    <p><span className="font-bold text-lg">Duration : </span> {time}</p>
                    <p className="text-success"><span className="font-bold text-lg">Cost : </span> {cost}</p>
                </div>
            </div>
            <CheckoutForm serviceInfo={service} />
        </div>
    );
};

export default Checkout;