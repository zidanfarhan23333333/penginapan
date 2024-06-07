import { useState } from "react";
import { useAuthContext } from "../context/useAuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data.status_code === 200) {
        const user = response.data.data;
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        document.cookie = `userData=${JSON.stringify(
          user
        )}; expires=${expirationDate.toUTCString()}`;

        const token = response.data.token;
        const role = response.data.data.role;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        dispatch({ type: "LOGIN", payload: { token, role } });

        navigate("/home");
      } else {
        setError("Login failed");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        console.log("No response received from server:", error.request);
      } else {
        console.log("Request error:", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
