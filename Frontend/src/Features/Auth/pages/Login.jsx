import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loading, handleLogin } = useAuth();

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await handleLogin(loginCredentials);
      navigate("/");
    } catch (loginError) {
      setError(loginError?.response?.data?.message || "Unable to log in.");
    }
  }

  return (
    <>
    
    </>
  );
};

export default Login;
