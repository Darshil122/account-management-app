import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <nav className="bg-primary p-3 d-flex justify-content-between align-item-center">
        <p className=" fw-bold text-white fs-3 m-0">Dashboard</p>
        <div className="d-flex gap-3">
          <button className="text-white btn outline-none">Welcome, {user?.firstname}</button>
          <button className="text-white cursor-pointer btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card shadow p-4" style={{ width: "400px" }}>
          <p className="fw-bold fs-3 text-center">My Profile</p>
          <p>
            <strong>First Name:</strong>
            {user.firstname}
          </p>
          <p>
            <strong>Last Name:</strong>
            {user.lastname}
          </p>
          <p>
            <strong>Email:</strong>
            {user.email}
          </p>
          <p>
            <strong>Contact:</strong>
            {user.contact}
          </p>
          <Link to="/edit-profile" className="btn btn-primary mt-3">
            Edit Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
