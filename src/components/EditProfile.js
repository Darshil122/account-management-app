import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

   const onChange = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value });
   };

  const onSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Profiled Updated");
    navigate("/dashboard");
  };
  if (!user) {
    toast.error("No user found");
    return;
  }
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card p-4 shadow w-25 mt-5">
        <p className="fw-bold fs-3 mb-3">Edit Profile</p>
        <div className="mb-2">
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            className="form-control mb-2"
            value={user.firstname}
            onChange={onChange}
            placeholder="First name"
          />
        </div>
        <div className="mb-2">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            className="form-control mb-2"
            value={user.lastname}
            onChange={onChange}
            placeholder="Last name"
          />
        </div>
        <div className="mb-2">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={onChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-2">
          <label>password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={user.password}
            onChange={onChange}
            placeholder="Password"
          />
        </div>
        <div className="mb-2">
          <label>Contact:</label>
          <input
            type="number"
            name="contact"
            className="form-control"
            value={user.contact}
            onChange={onChange}
            placeholder="Contact"
          />
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={onSave}>
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
