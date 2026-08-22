import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

export default function Home() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { state, dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const startQuiz = () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Please enter your name to continue.");
      return;
    }

    if (trimmedName.length > 30) {
      setError("Name must be 30 characters or less.");
      return;
    }

    if (state.index !== 0 || state.score !== 0 || state.completed) {
      dispatch({ type: "RESET" });
    }

    dispatch({ type: "SET_NAME", payload: trimmedName });
    navigate("/quiz");
  };

  return (
    <main className="home-page">
      <div className="container">
        <div className="hero-grid">
          <section className="hero-copy">
            <div className="eyebrow"><span /> React knowledge challenge</div>
            <h1>Test your React skills. <span>Level up.</span></h1>
            <p>
              A fast, focused quiz to test your React fundamentals. Answer before the timer runs out and climb the leaderboard.
            </p>

            <div className="hero-stats">
              <div><strong>{state.questions.length}</strong><span>Questions</span></div>
              <div><strong>15s</strong><span>Per question</span></div>
              <div><strong>∞</strong><span>Attempts</span></div>
            </div>
          </section>

          <section className="start-card">
            <div className="start-icon">⚡</div>
            <p className="card-kicker">Ready when you are</p>
            <h2>Start the challenge</h2>
            <p className="card-subtitle">Enter your name and see how well you know React.</p>

            <label htmlFor="player-name" className="form-label">Your name</label>
            <input
              id="player-name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setError("");
              }}
              onKeyDown={(event) => event.key === "Enter" && startQuiz()}
              placeholder="e.g. Ayush Sharma"
              className={`name-input ${error ? "input-error" : ""}`}
              autoComplete="name"
              maxLength={30}
            />
            {error && <div className="validation-message">{error}</div>}

            <button className="primary-button w-100 mt-3" onClick={startQuiz}>
              Start Quiz <span>→</span>
            </button>

            <div className="secure-note">No account required · Scores stay on this device</div>
          </section>
        </div>
      </div>
    </main>
  );
}
