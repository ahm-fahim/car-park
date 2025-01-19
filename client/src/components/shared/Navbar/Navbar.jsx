import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(res => res.json())
      .catch(err => console.log(err)
    )
  }

const navItem = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/">Services</Link>
    </li>
    <li>
      <Link to="/">About</Link>
    </li>
    <li>
      <Link to="/">Blog</Link>
    </li>
    <li>
      <Link to="/">Contact</Link>
    </li>
  </>
);
return (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          {navItem}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Car Park</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">{navItem}</ul>
    </div>
    <div className="navbar-end">
      <a className="btn btn-outline btn-success">Book Now</a>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" text-2xl m-1 ml-5"> <CgProfile /> </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {user?.email ? <>
            <li> <Link onClick={handleSignOut}>Sign Out</Link> </li>
            <li> <Link  to ="/bookings">My Bookings</Link> </li>
          </> : <li><Link to="/login">Sign In</Link></li>}
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    </div>
  </div>
);
};

export default Navbar;
