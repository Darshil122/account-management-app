import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Registration successfull");
    reset();
    navigate("/");
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg border-0 p-4" style={{ width: "400px" }}>
        <h2 className="text-center fw-bold mb-4">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">First name</label>
            <input
              type="text"
              className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
              placeholder="Enter firstname"
              {...register("firstname", {
                required: "Firstname is required",
              })}
            />
            {errors.firstname && (
              <div className="invalid-feedback">{errors.firstname.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
              placeholder="Enter lastname"
              {...register("lastname", {
                required: "Lastname is required",
              })}
            />
            {errors.lastname && (
              <div className="invalid-feedback">{errors.lastname.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be 5 characters",
                },
                maxLength: {
                  value: 5,
                  message: "Password must be 5 characters",
                },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Contact</label>
            <input
              type="number"
              className={`form-control ${errors.contact ? "is-invalid" : ""}`}
              placeholder="Enter Contact"
              {...register("contact", {
                required: "Contact is required",
                minLength: {
                  value: 10,
                  message: "Contact must be 10 digit",
                },
                maxLength: {
                  value: 10,
                  message: "Contact must be 10 digit",
                },
              })}
            />
            {errors.contact && (
              <div className="invalid-feedback">{errors.contact.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Register
          </button>
          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <Link to="/" className="text-decoration-none">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
