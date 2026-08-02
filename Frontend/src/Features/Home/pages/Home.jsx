import { Link } from 'react-router-dom';
import '../styles/Home.scss';

// ─── Data ────────────────────────────────────────────────
const STEPS = [
  {
    number: '01',
    icon: '📷',
    title: 'Open Your Camera',
    body: 'Allow camera access and let Predicto see your face in real time — privacy-first, nothing is stored.',
    accent: 'accent-red',
  },
  {
    number: '02',
    icon: '🧠',
    title: 'AI Reads Your Mood',
    body: 'Our deep-learning model analyses your facial micro-expressions and identifies your current emotion.',
    accent: 'accent-blue',
  },
  {
    number: '03',
    icon: '🎵',
    title: 'Songs Are Suggested',
    body: 'A curated playlist matching your exact vibe is generated and streamed straight to you.',
    accent: 'accent-teal',
  },
  {
    number: '04',
    icon: '🔄',
    title: 'Mood Changes — List Updates',
    body: 'As your expression shifts, Predicto adapts the suggestions in real time. Music that evolves with you.',
    accent: 'accent-crimson',
  },
];

const EMOTIONS = [
  { emoji: '😊', name: 'Happy' },
  { emoji: '😢', name: 'Sad' },
  { emoji: '😠', name: 'Angry' },
  { emoji: '😲', name: 'Surprised' },
  { emoji: '😨', name: 'Fearful' },
  { emoji: '🤢', name: 'Disgusted' },
  { emoji: '😐', name: 'Neutral' },
  { emoji: '😌', name: 'Calm' },
];

const EMOTION_TAGS = [
  { label: '😊 Happy', cls: '--1' },
  { label: '😢 Sad', cls: '--2' },
  { label: '😠 Surprise', cls: '--3' },
  { label: '😐 Neutral', cls: '--4' },
];

const BAR_ROWS = [
  { label: 'Happy', fillCls: '--h', pct: '82%' },
  { label: 'Sad', fillCls: '--s', pct: '55%' },
  { label: 'Angry', fillCls: '--a', pct: '30%' },
  { label: 'Neutral', fillCls: '--n', pct: '15%' },
];

// ─── Component ───────────────────────────────────────────
export default function Home() {
  return (
    <div className="home-page">
      {/* ── Animated Background ── */}
      <div className="home-page__bg" aria-hidden="true">
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="orb orb--3" />
        <div className="grid-overlay" />
      </div>

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <Link to="/" className="navbar__logo">
          <span className="logo-icon">🎵</span>
          <span className="logo-text">Predicto</span>
        </Link>

        <ul className="navbar__links">
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#emotions">Emotions</a></li>
        </ul>

        <div className="navbar__cta">
          <Link to="/login" className="btn btn--ghost">Sign In</Link>
          <Link to="/register" className="btn btn--primary">Get Started</Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__badge">
          <span className="badge-dot" aria-hidden="true" />
          AI-Powered Emotion Music
        </div>

        <h1 className="hero__headline" id="hero-heading">
          <span className="gradient">Feel the Music</span>
          <span className="line-accent">that Feels You</span>
        </h1>

        <p className="hero__sub">
          Predicto reads your facial expressions through your camera and curates
          the perfect playlist for your exact mood — in real time, every time.
        </p>

        <div className="hero__actions">
          <Link to="/predict" className="btn btn--primary btn--large">
            🎥 Try It Now
          </Link>
          <a href="#how-it-works" className="btn btn--ghost btn--large">
            See How It Works
          </a>
        </div>

        {/* Camera preview card */}
        <div className="hero__preview">
          <div className="preview-card">
            {EMOTION_TAGS.map((t) => (
              <span
                key={t.cls}
                className={`emotion-tag emotion-tag${t.cls}`}
                aria-hidden="true"
              >
                {t.label}
              </span>
            ))}
            <span className="cam-icon" aria-hidden="true">📸</span>
            <span className="cam-label">Camera Feed Preview</span>
            <span className="corner corner--tl" aria-hidden="true" />
            <span className="corner corner--tr" aria-hidden="true" />
            <span className="corner corner--bl" aria-hidden="true" />
            <span className="corner corner--br" aria-hidden="true" />
          </div>
          <div className="preview-glow" aria-hidden="true" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section
        className="how-it-works"
        id="how-it-works"
        aria-labelledby="how-heading"
      >
        <p className="how-it-works__label">The Process</p>
        <h2 className="how-it-works__title" id="how-heading">
          From Face to <span>Playlist</span> in Seconds
        </h2>
        <p className="how-it-works__desc">
          Four simple steps powered by cutting-edge computer vision and music intelligence.
        </p>

        <div className="how-it-works__steps">
          {STEPS.map((s) => (
            <article className={`step-card step-card--${s.accent}`} key={s.number}>
              <span className="step-card__number">Step {s.number}</span>
              <span className="step-card__icon" aria-hidden="true">{s.icon}</span>
              <h3 className="step-card__title">{s.title}</h3>
              <p className="step-card__body">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES
      ══════════════════════════════════════ */}
      <section className="features" id="features" aria-labelledby="feat-heading">
        <div className="features__inner">
          {/* Left copy */}
          <div className="features__copy">
            <p className="features__label">Why Predicto?</p>
            <h2 className="features__title" id="feat-heading">
              Music That Actually <span>Understands</span> You
            </h2>
            <p className="features__body">
              Forget manually picking moods or genres. Predicto's on-device facial
              expression engine analyses 468 facial landmarks to deliver hyper-accurate
              emotion detection — no data leaves your device.
            </p>

            <ul className="features__list">
              {[
                'Real-time expression analysis at 30 fps',
                'MediaPipe-powered, runs fully on-device',
                'Supports 7+ distinct emotional states',
                'Instant playlist refresh as mood shifts',
                'Privacy-first — zero camera data stored',
                'Works in low-light conditions',
              ].map((item) => (
                <li key={item}>
                  <span className="check" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/predict" className="btn btn--ghost btn--large">
              🚀 Launch Predicto
            </Link>
          </div>

          {/* Right visual */}
          <div className="features__visual">
            <div className="vis-card">
              <div className="emotion-display">
                <span className="face" aria-hidden="true">😊</span>
                <span className="emotion-name">Happy</span>

                <div className="progress-bars">
                  {BAR_ROWS.map((row) => (
                    <div className="bar-row" key={row.label}>
                      <span className="bar-label">{row.label}</span>
                      <div className="bar-track" role="progressbar" aria-label={row.label} aria-valuenow={parseInt(row.pct)}>
                        <div className={`bar-fill bar-fill${row.fillCls}`} />
                      </div>
                      <span className="bar-pct">{row.pct}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="song-suggestion">
                <div className="song-art" aria-hidden="true">🎵</div>
                <div className="song-info">
                  <div className="song-title">Blinding Lights</div>
                  <div className="song-artist">The Weeknd</div>
                </div>
                <button className="song-play" aria-label="Play song">▶</button>
              </div>
            </div>

            <span className="float-badge" aria-hidden="true">✨ Live Detection</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EMOTIONS GRID
      ══════════════════════════════════════ */}
      <section className="emotions" id="emotions" aria-labelledby="emo-heading">
        <p className="emotions__label">Recognised Moods</p>
        <h2 className="emotions__title" id="emo-heading">
          Every <span>Emotion</span> Has Its Sound
        </h2>
        <div className="emotions__grid">
          {EMOTIONS.map((e) => (
            <div className="emotion-chip" key={e.name}>
              <span className="chip-emoji" aria-hidden="true">{e.emoji}</span>
              <span className="chip-name">{e.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="cta-banner" aria-labelledby="cta-heading">
        <div className="cta-banner__inner">
          <span className="cta-banner__emoji" aria-hidden="true">🎶</span>
          <h2 className="cta-banner__title" id="cta-heading">
            Ready to <span>Feel</span> the Difference?
          </h2>
          <p className="cta-banner__sub">
            Turn on your camera, let your emotions speak, and discover music that
            was always meant for this moment.
          </p>
          <div className="cta-banner__actions">
            <Link to="/predict" className="btn btn--primary btn--large">🎥 Start Now — It's Free</Link>
            <Link to="/register" className="btn btn--ghost   btn--large">Create an Account</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="footer">
        <div className="footer__brand">
          <span className="logo-icon" aria-hidden="true">🎵</span>
          <span className="brand-name">Predicto</span>
        </div>
        <p className="footer__copy">© 2025 Predicto · Built with ❤️ &amp; AI</p>
        <nav className="footer__links" aria-label="Footer navigation">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Register</Link>
          <a href="#how-it-works">How It Works</a>
        </nav>
      </footer>
    </div>
  );
}
