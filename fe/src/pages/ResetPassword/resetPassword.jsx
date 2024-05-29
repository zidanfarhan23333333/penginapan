import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/atoms/backButton/backButton";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleContinue = async () => {
    if (!showPasswordInput) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/auth/get-email",
          {
            email,
          }
        );
        if (response.data.status_code === 200) {
          console.log(response.data.data.email);

          setShowPasswordInput(true);
          setEmail(response.data.data.email);
        } else {
          setError("Reset password gagal.");
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
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/auth/reset-password",
          {
            email,
            password,
          }
        );
        if (response.data.status_code === 200) {
          navigate("/login");
        } else {
          setError("Reset password gagal.");
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
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 max-w-md w-full mx-4 md:max-w-[550px] md:w-[450px] flex flex-col justify-center p-8 rounded-lg shadow-lg gap-6">
        <div className="flex justify-center">
          <h1 className="text-white text-3xl mb-4 font-semibold">
            Reset Password
          </h1>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex items-center justify-center flex-col gap-2">
          {!showPasswordInput && (
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          {showPasswordInput && (
            <input
              type="password"
              placeholder="New Password"
              className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          <div className="flex gap-4">
            <BackButton path={"/login"} />
            <button
              onClick={handleContinue}
              className="bg-white text-blue-700 dark:text-blue-200 p-2 rounded mb-4 flex justify-center items-center gap-2 hover:bg-blue-100 dark:hover:bg-blue-800"
            >
              {showPasswordInput ? "Reset Password" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
