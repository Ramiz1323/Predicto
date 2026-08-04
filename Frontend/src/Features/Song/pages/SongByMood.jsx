import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSong } from "../hooks/useSong";
import { moodCatalog } from "../../Home/domain/songCatalog";
import "../styles/Song.scss";

// Helper to format seconds to M:SS
const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function SongByMood() {
  const [searchParams] = useSearchParams();
  const mood = searchParams.get("mood") || "happy";
  const { song: songs, loading, handleGetSong } = useSong();
  const audioRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentMood = moodCatalog.find((item) => item.key === mood) || moodCatalog[0];

  useEffect(() => {
    handleGetSong({ mood });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mood]);

  useEffect(() => {
    if (songs && songs.length > 0 && !currentTrack) {
      setCurrentTrack(songs[0]);
    }
  }, [songs, currentTrack]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    if (!songs || songs.length === 0) return;
    const currentIndex = songs.findIndex((t) => t._id === currentTrack._id);
    const nextIndex = (currentIndex + 1) % songs.length;
    handleTrackSelect(songs[nextIndex]);
  };

  const handlePrev = () => {
    if (!songs || songs.length === 0) return;
    const currentIndex = songs.findIndex((t) => t._id === currentTrack._id);
    const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    handleTrackSelect(songs[prevIndex]);
  };

  const handleAudioEnded = () => {
    handleNext(); // Auto-play next song
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleScrub = (e) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleTrackSelect = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setCurrentTime(0);
    if (audioRef.current) {
      setTimeout(() => {
        audioRef.current.play();
      }, 0);
    }
  };

  return (
    <div className="song-page">
      {/* Background */}
      <div className="song-page__bg" aria-hidden="true">
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="grid-overlay" />
      </div>

      <main className="song-panel">
        <Link to="/predict" className="song-back">
          <span className="back-arrow">←</span> Back to detector
        </Link>

        <div className="song-card">
          <div className="song-card__eyebrow">
            Detected Mood: {currentMood.emoji} {currentMood.label}
          </div>
          <h1 className="song-card__title">Your Perfect Tracks</h1>

          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Finding the right vibe...</p>
            </div>
          ) : songs && songs.length > 0 ? (
            <>
              {/* NOW PLAYING HEADER */}
              {currentTrack && (
                <div className="player-container">
                  <div className={`poster-wrapper ${isPlaying ? "playing" : ""}`}>
                    <img 
                      src={currentTrack.posterUrl || "https://via.placeholder.com/300?text=Music"} 
                      alt={currentTrack.title} 
                      className="song-poster" 
                    />
                    <div className="poster-glow" aria-hidden="true" />
                  </div>
                  
                  <div className="player-info">
                    <h2 className="track-title">{currentTrack.title}</h2>
                    <p className="track-artist">Curated for your {mood} mood</p>
                  </div>
                  
                  <audio 
                    ref={audioRef} 
                    src={currentTrack.url} 
                    onEnded={handleAudioEnded}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                  />

                  {/* Progress Bar & Timestamps */}
                  <div className="progress-container">
                    <span className="time-stamp">{formatTime(currentTime)}</span>
                    <input 
                      type="range"
                      className="progress-bar"
                      min="0"
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleScrub}
                    />
                    <span className="time-stamp">{formatTime(duration)}</span>
                  </div>

                  <div className="controls">
                    <button className="btn-control" onClick={handlePrev} aria-label="Previous">
                      ⏮
                    </button>
                    <button 
                      className="btn-play-pause" 
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? "⏸" : "▶"}
                    </button>
                    <button className="btn-control" onClick={handleNext} aria-label="Next">
                      ⏭
                    </button>
                  </div>
                </div>
              )}

              {/* PLAYLIST */}
              <div className="playlist-container">
                <h3 className="playlist-title">Up Next</h3>
                <div className="playlist">
                  {songs.map((track) => (
                    <button 
                      key={track._id || track.url}
                      className={`playlist-item ${currentTrack?._id === track._id ? "active" : ""}`}
                      onClick={() => handleTrackSelect(track)}
                    >
                      <img 
                        src={track.posterUrl || "https://via.placeholder.com/100?text=Music"} 
                        alt={track.title} 
                        className="item-poster"
                      />
                      <div className="item-details">
                        <span className="item-title">{track.title}</span>
                      </div>
                      {currentTrack?._id === track._id && isPlaying && (
                        <span className="playing-indicator">🎵</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="error-state">
              <p>Could not load songs for this mood.</p>
              <button className="btn btn--primary" onClick={() => handleGetSong({ mood })}>
                Try Again
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
