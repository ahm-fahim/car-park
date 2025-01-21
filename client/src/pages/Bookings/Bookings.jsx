import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingsCard from "./BookingsCard";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5001/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleBookingDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");

    if (proceed) {
      fetch(`http://localhost:5001/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully.");
              const remaining = bookings.filter((booking) => booking._id != id);
              setBookings(remaining);
          }
        });
    }
  };
  return (
    <div className="grid grid-cols-1 gap-5 my-10 ">
      {bookings.map((bookedInfo) => (
        <BookingsCard
          key={bookedInfo._id}
          bookedInfo={bookedInfo}
          handleBookingDelete={handleBookingDelete}
        ></BookingsCard>
      ))}
    </div>
  );
};

export default Bookings;
