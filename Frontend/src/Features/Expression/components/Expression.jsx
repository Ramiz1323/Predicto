const Expression = ({ videoRef, emotion }) => {
  return (
    <div className="expression-shell">
      <video ref={videoRef} autoPlay playsInline className="expression-video" />
      <div className="expression-state">
        <span>Live emotion</span>
        <strong>{emotion}</strong>
      </div>
    </div>
  );
}

export default Expression