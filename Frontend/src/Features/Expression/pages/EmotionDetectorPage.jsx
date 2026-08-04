import { useEffect, useRef, useState } from "react";
import { cleanup, initialize } from "../utils/emotion";
import Expression from "../components/Expression";
import { Link, useNavigate } from "react-router-dom";
import { getMoodKeyFromEmotion, moodCatalog } from "../../Home/domain/songCatalog.js";
import "../styles/Expression.scss";

export default function EmotionDetector() {
  const videoRef = useRef(null);
  const faceLandmarkerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [emotion, setEmotion] = useState("Detecting...");
  const moodKey = getMoodKeyFromEmotion(emotion);
  const currentMood = moodCatalog.find((item) => item.key === moodKey);
  const navigate = useNavigate();

  useEffect(() => {
    const setup = async () => {
      await initialize(
        videoRef,
        faceLandmarkerRef,
        setEmotion,
        animationFrameRef,
      );
    };

    setup();

    return () => {
      cleanup(videoRef, animationFrameRef);
    };
  }, []);

  const handleFindMusic = () => {
    if (emotion && emotion !== "Detecting...") {
      navigate(`/songsbymood?mood=${moodKey}`);
    }
  };

  return (
    <main className="app-shell app-shell--detector">
      <section className="section-block detector-layout">
        <div className="detector-stage">
          <p className="eyebrow">Mood detector</p>
          <h1>Let the camera pick the next song mood.</h1>
          <p className="hero-text">
            The detected emotion is translated into one of the four mood buckets.
          </p>
          <Expression videoRef={videoRef} emotion={emotion} />
        </div>

        <aside className="detector-panel">
          <p className="player-label">Detected mood</p>
          <h2>{currentMood?.label ?? "Happy"}</h2>
          <p className="muted">{currentMood?.description ?? "Reading emotion data from the video stream."}</p>

          <div className="detector-badge">{emotion}</div>

          <div className="recommendations" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
             <button 
                className="btn btn--primary btn--large" 
                onClick={handleFindMusic}
                disabled={emotion === "Detecting..."}
             >
                🎵 Find Music for {currentMood?.label ?? "Mood"}
             </button>
             
             <Link className="btn btn--ghost btn--large" to="/">
               Back to home
             </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

