export default function Timer({ time }) {
  const urgent = time <= 5;

  return (
    <div className={`timer-card ${urgent ? "timer-urgent" : ""}`} aria-live="polite">
      <span className="timer-icon">⏱</span>
      <div>
        <div className="timer-label">Time remaining</div>
        <strong>{String(time).padStart(2, "0")}s</strong>
      </div>
    </div>
  );
}
