import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!user) {
      toast.error("No user found. Please register first.");
      reset();
      return;
    }
    if (user.email === data.email && user.password === data.password) {
      toast.success("Login successful");
      navigate("/dashboard");
    } else {
      toast.error("Invalid Email/password");
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg border-0 p-4" style={{ width: "400px" }}>
        <h1 className="text-center fw-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="invalid-feedback">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "Password is required",
                maxLength: {
                  value: 5,
                  message: "Password must be 5 characters",
                },
                minLength: {
                  value: 5,
                  message: "Password must be 5 characters",
                },
              })}
            />
            {errors.password && (
              <p className="invalid-feedback">{errors.password.message}</p>
            )}
          </div>
          <button className="btn btn-primary w-100 mt-2">Login</button>
          <p className="text-center mt-3 mb-0">
            Don't have account?{" "}
            <Link to="/register" className="text-decoration-none">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
