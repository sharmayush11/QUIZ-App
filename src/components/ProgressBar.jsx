export default function ProgressBar({ current, total }) {
  const progress = total ? Math.round((current / total) * 100) : 0;

  return (
    <div className="progress-wrap" aria-label={`Question ${current + 1} of ${total}`}>
      <div className="d-flex justify-content-between align-items-center mb-2 small fw-semibold">
        <span>Question {current + 1} of {total}</span>
        <span>{progress}% complete</span>
      </div>
      <div className="progress progress-modern">
        <div
          className="progress-bar progress-bar-modern"
          style={{ width: `${Math.max(progress, 4)}%` }}
        />
      </div>
    </div>
  );
}
