import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = React.useState();
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const [error, setError] = React.useState();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        {
          email,
          name,
          password,
        }
      );
      if (response.data.status_code === 200) {
        navigate("/login");
        console.log("login berhasil");
        console.log(response.data.data);
      } else {
        console.log("login gagal");
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
    <div className="bg-white px-10 py-20 rounded-3xl border-gray-2">
      <h1 className="text-5xl font-semibold">Create an Account</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Let's get started by creating your account
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Name</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
            type="password"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={handleLogin}
            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold "
          >
            Sign up
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">
            Already have an account?
            <Link className="underline text-violet-500 font-medium" to="/login">
              SignIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
