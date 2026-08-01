import { useEffect, useRef, useState } from "react";
import { cleanup, initialize } from "../utils/emotion";
import Expression from "../components/Expression";
import { Link } from "react-router-dom";
import { getMoodKeyFromEmotion, getSongsForMood, moodCatalog } from "../../Home/domain/songCatalog.js";

export default function EmotionDetector() {
  const videoRef = useRef(null);
  const faceLandmarkerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [emotion, setEmotion] = useState("Detecting...");
  const moodKey = getMoodKeyFromEmotion(emotion);
  const recommendations = getSongsForMood(moodKey);
  const currentMood = moodCatalog.find((item) => item.key === moodKey);

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

  return (
    <main className="app-shell app-shell--detector">
      <section className="section-block detector-layout">
        <div className="detector-stage">
          <p className="eyebrow">Mood detector</p>
          <h1>Let the camera pick the next song mood.</h1>
          <p className="hero-text">
            The detected emotion is translated into the same four mood buckets used by the song library.
          </p>
          <Expression videoRef={videoRef} emotion={emotion} />
        </div>

        <aside className="detector-panel">
          <p className="player-label">Detected mood</p>
          <h2>{currentMood?.label ?? "Happy"}</h2>
          <p className="muted">{currentMood?.description ?? "Reading emotion data from the video stream."}</p>

          <div className="detector-badge">{emotion}</div>

          <div className="recommendations">
            {recommendations.map((song) => (
              <article key={song.title} className="recommendation-card">
                <span>{song.title}</span>
                <small>{song.artist}</small>
              </article>
            ))}
          </div>

          <Link className="secondary-action secondary-action--full" to="/">
            Back to home
          </Link>
        </aside>
      </section>
    </main>
  );
}

