import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import PropTypes from "prop-types";

const CheckoutForm = ({ serviceInfo }) => {
    const { _id, cost, image_url } = serviceInfo;
    const { user } = useContext(AuthContext);
    const handleCheckout = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const date = form.date.value;
        const massage = form.massage.value;

        const bookingInfo = {
            customer_name: name,
            email, phone, date, massage,
            service_id: _id,
            service_cost: cost,
            service_image: image_url,
        }

        console.log(bookingInfo);

        fetch('http://localhost:5001/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Service Booked successfully");
                }

            })


    };
    return (
        <form className="mt-5 grid grid-cols-2 gap-4 lg:p-10 bg-base-200 rounded-md" onSubmit={handleCheckout}>
            <div className="flex flex-col gap-4">
                <input className="p-2 rounded-md " placeholder="Name" type="text" name="name" id="" defaultValue={user?.displayName} />
                <input className="p-2 rounded-md " placeholder="Phone" type="text" name="phone" id="" />
                <input className="p-2 rounded-md " placeholder="Email" type="text" name="email" id="" defaultValue={user?.email} />
            </div>
            <div className="flex flex-col gap-4">
                <input className="p-2 rounded-md " type="date" name="date" id="" />
                <textarea className="textarea textarea-success" name="massage" placeholder="Massage"></textarea>
            </div>
            <button className="btn btn-success col-span-2 ">Confirm Booking</button>
        </form>
    );
};

CheckoutForm.propTypes = {
    serviceInfo: PropTypes.object,
};

export default CheckoutForm;