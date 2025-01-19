import React from 'react';
import PropTypes from 'prop-types';

const BookingsCard = ({ bookedInfo }) => {
    const {
        email,
        customer_name,
        phone,
        date,
        massage,
        service_id,
        service_cost,
        service_image } = bookedInfo;
    return (
        <div className='grid lg:grid-cols-10 grid-cols-1 justify-between items-center gap-4 bg-base-200 rounded-md p-5'>
            <div className='col-span-1 flex lg:flex-row gap-4 flex-col items-center'>
                <button className='rounded-full bg-error px-2'>X</button>
                <img className='h-20 rounded-md ' src={service_image} alt="" />
            </div>
            <div className='col-span-2'>
                <p><span className="font-bold">Name -</span>{customer_name}</p>
                <p><span className="font-bold">Phone -</span>{phone}</p>
                <p><span className="font-bold">Email -</span>{email}</p>
            </div>
            <div className='col-span-2'>
                <p><span className="font-bold ">Date - </span>{date}</p>
            </div>
            <div className='col-span-4'>
                <p><span className="font-bold">Service ID -</span>{service_id}</p>
                <p className='text-success'><span className="font-bold">Service Cost -</span>{service_cost}</p>
                <p><span className="font-bold">Customers massage -</span>{massage}</p>
            </div>
            <button className='btn btn-success col-span-1'>Pending..</button>
        </div>
    );
};

BookingsCard.propTypes = {
    bookedInfo: PropTypes.object,
};

export default BookingsCard;