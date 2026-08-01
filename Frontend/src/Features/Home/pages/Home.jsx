import { Link } from "react-router-dom";
import { moodCatalog } from "../domain/songCatalog.js";

const highlights = [
  {
    title: "Facial Synthesis",
    description: "Tracks micro-expressions to shift the soundtrack in real time.",
  },
  {
    title: "Adaptive Queue",
    description: "Transitions between moods without breaking the flow.",
  },
  {
    title: "Mood Sync",
    description: "Four clear mood buckets keep the experience predictable and fast.",
  },
];

const steps = [
  "Open the camera and let the detector read your expression.",
  "Map the result into one of the four mood buckets.",
  "Serve tracks that match the emotional temperature instantly.",
];

function Home() {
  return (
    <main className="landing-shell">
      <section className="hero-section">
        <header className="topbar">
          <Link className="brand-lockup" to="/">
            <span className="brand-mark">P</span>
            <div>
              <strong>Predicto</strong>
              <span>Mood-aware music</span>
            </div>
          </Link>

          <nav className="topnav" aria-label="Primary navigation">
            <a href="#features">Features</a>
            <a href="#moods">Moods</a>
            <a href="#how-it-works">How it works</a>
          </nav>

          <div className="topbar-actions">
            <Link className="ghost-button" to="/login">
              Login
            </Link>
            <Link className="primary-button primary-button--small" to="/register">
              Register
            </Link>
          </div>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Real-time mood engine</p>
            <h1>
              Your mood, <span>your soundtrack</span>.
            </h1>
            <p className="hero-intro">
              Predicto reads facial cues, maps them into a simple mood system, and keeps the next song aligned with the moment.
            </p>

            <div className="hero-actions">
              <Link className="primary-button" to="/predict">
                Get Started
              </Link>
              <a className="secondary-button" href="#features">
                Explore Features
              </a>
            </div>

            <ul className="metric-row" aria-label="Product highlights">
              <li>
                <strong>250K+</strong>
                <span>sessions tuned</span>
              </li>
              <li>
                <strong>4</strong>
                <span>mood buckets</span>
              </li>
              <li>
                <strong>&lt;1s</strong>
                <span>response time</span>
              </li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
              <div className="hero-card__visual">
                <div className="scan-frame" />
                <div className="scan-frame scan-frame--inner" />
                <div className="hero-orb hero-orb--one" />
                <div className="hero-orb hero-orb--two" />
                <div className="hero-wave" />
              </div>

              <div className="hero-card__content">
                <div>
                  <p className="card-kicker">Detection</p>
                  <h2>Melancholic</h2>
                  <p className="card-copy">Confidence 94% · queued for a softer mix</p>
                </div>

                <div className="mini-bars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="features">
        <div className="section-heading">
          <p className="eyebrow">Organized experience</p>
          <h2>Everything is grouped so the page reads cleanly on any screen size.</h2>
          <p>
            The layout keeps one clear hero, a compact feature grid, a focused explanation section, and a single conversion block.
          </p>
        </div>

        <div className="feature-grid">
          {highlights.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section story-section" id="how-it-works">
        <div className="story-copy">
          <p className="eyebrow">How it works</p>
          <h2>Simple flow, less visual noise, better mobile behavior.</h2>
          <p>
            The interface scales by stacking panels on smaller devices while preserving the same reading order, spacing, and call to action hierarchy.
          </p>

          <ol className="step-list">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <aside className="mood-panel" id="moods">
          <p className="eyebrow">Mood buckets</p>
          <div className="mood-chip-list">
            {moodCatalog.map((mood) => (
              <div key={mood.key} className="mood-chip">
                <strong>{mood.label}</strong>
                <span>{mood.description}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="cta-section">
        <p className="eyebrow">Ready to try it?</p>
        <h2>Open the detector and let the page adapt to your expression.</h2>
        <div className="cta-actions">
          <Link className="primary-button" to="/predict">
            Start Detection
          </Link>
          <Link className="secondary-button" to="/register">
            Create Account
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;