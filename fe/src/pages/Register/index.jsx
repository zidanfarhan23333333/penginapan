import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import landing from "../../assets/landing.jpg";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("pengusaha");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !name || !password || !role) {
      setError("All fields are required");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(password)) {
      setError("Password Kombinasi angka dan huruf besar");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        {
          email,
          name,
          password,
          role,
        }
      );
      if (response.data.status_code === 200) {
        navigate("/login");
        console.log("Registration successful");
        console.log(response.data.data);
      } else {
        console.log("Registration failed");
        setError(response.data.message || "Registration failed");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        console.log("No response received from server:", error.request);
      } else {
        console.log("Request error:", error.message);
      }
    }
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src={landing}
        alt="landing.jpg"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 h-auto w-full max-w-lg flex flex-col justify-center p-6 md:p-8 rounded shadow-lg gap-4 rounded-2xl">
          <h1 className="text-3xl font-semibold text-center">
            Create an Account
          </h1>
          <p className="font-medium text-lg text-gray-500 mt-2 text-center">
            Let's get started by creating your account
          </p>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <div className="mt-4">
            <div>
              <label className="text-lg font-medium">Name</label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="text-lg font-medium">Email</label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="text-lg font-medium">Password</label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="text-lg font-medium">Jenis Akun</label>
              <select
                className="w-full border-2 border-gray-300 rounded-xl p-3 mt-1 bg-transparent"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="pengusaha">Pengusaha</option>
                <option value="pelanggan">Pelanggan</option>
              </select>
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
              <button
                onClick={handleRegister}
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              >
                Sign up
              </button>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <p className="font-medium text-base">
                Already have an account?{" "}
                <Link
                  className="underline text-violet-500 font-medium"
                  to="/login"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
