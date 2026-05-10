import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "customer",
    phone_number: "",
  });

  const [error, setError] = useState("");

  // Update form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit registration form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await registerUser(formData);

    if (result.success) {
      navigate("/login");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
          Create Account
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="customer">Customer</option>
            <option value="agent">Agent</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;