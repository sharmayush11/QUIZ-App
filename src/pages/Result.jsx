import { useContext, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

export default function Result() {
  const { state, dispatch } = useContext(QuizContext);
  const total = state.questions.length;
  const percentage = useMemo(
    () => (total ? Math.round((state.score / total) * 100) : 0),
    [state.score, total]
  );

  useEffect(() => {
    const storageKey = `quiz-result-${state.sessionId}`;
    if (sessionStorage.getItem(storageKey)) return;

    const entry = {
      id: state.sessionId,
      name: state.username || "Anonymous",
      score: state.score,
      total,
      percentage,
      date: new Date().toISOString(),
    };

    const stored = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    const updated = [...stored, entry]
      .sort((a, b) => b.score - a.score || b.percentage - a.percentage)
      .slice(0, 50);

    localStorage.setItem("leaderboard", JSON.stringify(updated));
    sessionStorage.setItem(storageKey, "saved");
  }, [percentage, state.score, state.sessionId, state.username, total]);

  const message =
    percentage === 100
      ? "Perfect score. You absolutely nailed it!"
      : percentage >= 70
        ? "Great work. Your React fundamentals are looking strong."
        : percentage >= 50
          ? "Solid attempt. A little more practice and you’ll level up."
          : "Keep practicing. Every attempt makes you better.";

  return (
    <main className="result-page">
      <div className="container result-container">
        <section className="result-card">
          <div className="result-icon">🏆</div>
          <p className="eyebrow justify-content-center"><span /> Challenge complete <span /></p>
          <h1>Nice work, {state.username || "Quizzer"}!</h1>
          <p className="result-message">{message}</p>

          <div className="score-ring" style={{ "--score": `${percentage}%` }}>
            <div className="score-ring-inner">
              <strong>{percentage}%</strong>
              <span>accuracy</span>
            </div>
          </div>

          <div className="result-stats">
            <div><strong>{state.score}</strong><span>Correct</span></div>
            <div><strong>{total - state.score}</strong><span>Incorrect</span></div>
            <div><strong>{total}</strong><span>Total</span></div>
          </div>

          <div className="result-actions">
            <Link to="/leaderboard" className="primary-button">View leaderboard <span>→</span></Link>
            <Link
              to="/"
              className="secondary-button"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Try again
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
