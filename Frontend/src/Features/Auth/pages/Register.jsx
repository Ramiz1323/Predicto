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
    <main className="auth-screen auth-screen--register">
      <section className="auth-panel auth-panel--hero glass-panel">
        <div className="brand-row">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Predicto</p>
            <h1>Create account</h1>
          </div>
        </div>

        <p className="auth-strapline">Start your mood-based journey.</p>
      </section>

      <section className="auth-panel auth-panel--form glass-panel">
        <div className="auth-card">
          <form className="auth-form" onSubmit={handleRegisterSubmit}>
            <label>
              Username
              <input
                type="text"
                value={registerCredentials.username}
                onChange={(event) =>
                  setRegisterCredentials((current) => ({
                    ...current,
                    username: event.target.value,
                  }))
                }
                placeholder="Username"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={registerCredentials.email}
                onChange={(event) =>
                  setRegisterCredentials((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                placeholder="Email"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                value={registerCredentials.password}
                onChange={(event) =>
                  setRegisterCredentials((current) => ({
                    ...current,
                    password: event.target.value,
                  }))
                }
                placeholder="Password"
              />
            </label>

            {error ? <p className="form-error">{error}</p> : null}

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Register"}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register