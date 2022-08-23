import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import AuthService from "../services/auth_service";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.empid}</strong> Profile
        </h3>
      </header>

      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Phone:</strong> {currentUser.phone}
      </p>
      <Link to="/create-booking">
        <button>Create Booking</button>
      </Link>
      <Link to="/view-booking">
        <button>View Booking</button>
      </Link>
      <Link to="/cancel-booking">
        <button>Cancel Booking</button>
      </Link>
    </div>


  );
};

export default Profile;