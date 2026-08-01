import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="landing-screen">
      <section className="landing-hero glass-panel">
        <div className="landing-copy">
          <div className="brand-row brand-row--hero">
            <span className="brand-mark brand-mark--large">P</span>
            <div>
              <p className="eyebrow">Predicto</p>
              <h1>Mood to music, designed cleanly.</h1>
            </div>
          </div>

          <p className="landing-text">
            Login or create an account to continue.
          </p>

          <div className="hero-actions">
            <Link className="primary-action" to="/login">
              Login
            </Link>
            <Link className="secondary-action" to="/register">
              Register
            </Link>
          </div>
        </div>

        <div className="landing-glow">
          <div className="landing-glow__tile landing-glow__tile--one" />
          <div className="landing-glow__tile landing-glow__tile--two" />
          <div className="landing-glow__tile landing-glow__tile--three" />
          <div className="landing-glow__tile landing-glow__tile--four" />
        </div>
      </section>
    </main>
  );
}

export default Home;