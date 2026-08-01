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
    <main className="auth-screen auth-screen--login">
      <section className="auth-panel auth-panel--hero glass-panel">
        <div className="brand-row">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Predicto</p>
            <h1>Welcome back</h1>
          </div>
        </div>

        <p className="auth-strapline">Sign in to continue.</p>
      </section>

      <section className="auth-panel auth-panel--form glass-panel">
        <div className="auth-card">
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Username or email
              <input
                type="text"
                value={loginCredentials.username}
                onChange={(event) =>
                  setLoginCredentials((current) => ({
                    ...current,
                    username: event.target.value,
                    email: event.target.value,
                  }))
                }
                placeholder="jane@music.com"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                value={loginCredentials.password}
                onChange={(event) =>
                  setLoginCredentials((current) => ({
                    ...current,
                    password: event.target.value,
                  }))
                }
                placeholder="Password"
              />
            </label>

            {error ? <p className="form-error">{error}</p> : null}

            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <p className="auth-switch">
            New here? <Link to="/register">Register</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
