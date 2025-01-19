import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingsCard from "./BookingsCard";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5001/bookings?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBookings(data);
            })
    }, [])
    return (
        <div className="grid grid-cols-1 gap-5 my-10">
            {
                bookings.map(bookedInfo => <BookingsCard key={bookedInfo._id} bookedInfo = {bookedInfo}></BookingsCard>)
            }
        </div>
    );
};

export default Bookings;