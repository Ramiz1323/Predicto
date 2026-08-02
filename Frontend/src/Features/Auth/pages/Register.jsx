import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
    const { loading, handleRegister } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [registerCredentials, setRegisterCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await handleRegister(registerCredentials);
            navigate("/");
        } catch (registerError) {
            setError(registerError?.response?.data?.message || "Unable to create account.");
        }
    }

  return (
    <>
    
    </>
  )
}

export default Register