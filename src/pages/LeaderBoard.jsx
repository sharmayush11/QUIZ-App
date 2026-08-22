import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const readLeaderboard = () => {
  try {
    return JSON.parse(localStorage.getItem("leaderboard") || "[]");
  } catch {
    return [];
  }
};

export default function LeaderBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(readLeaderboard());
  }, []);

  const topScore = useMemo(() => data[0]?.score ?? 0, [data]);

  const clearBoard = () => {
    if (!window.confirm("Clear all leaderboard scores from this device?")) return;
    localStorage.removeItem("leaderboard");
    setData([]);
  };

  const formatDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <main className="leaderboard-page">
      <div className="container">
        <div className="leaderboard-heading">
          <div>
            <p className="eyebrow"><span /> Hall of fame</p>
            <h1>Leaderboard</h1>
            <p>See who is leading the React challenge on this device.</p>
          </div>
          <Link to="/" className="secondary-button">Play quiz</Link>
        </div>

        <section className="leaderboard-card">
          {data.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🏆</div>
              <h2>No scores yet</h2>
              <p>Be the first person to complete the quiz and claim the top spot.</p>
              <Link to="/" className="primary-button">Start your quiz <span>→</span></Link>
            </div>
          ) : (
            <>
              <div className="leaderboard-summary">
                <div><span>Entries</span><strong>{data.length}</strong></div>
                <div><span>Top score</span><strong>{topScore}/{data[0]?.total ?? "—"}</strong></div>
              </div>

              <div className="table-responsive">
                <table className="leaderboard-table">
                  <thead>
                    <tr><th>Rank</th><th>Player</th><th>Score</th><th>Accuracy</th><th>Date</th></tr>
                  </thead>
                  <tbody>
                    {data.map((entry, index) => (
                      <tr key={entry.id || `${entry.name}-${entry.date}-${index}`}>
                        <td><span className={`rank rank-${index + 1}`}>{index + 1}</span></td>
                        <td><strong>{entry.name}</strong></td>
                        <td><strong>{entry.score}</strong><span className="score-total">/{entry.total ?? "—"}</span></td>
                        <td><span className="accuracy-pill">{entry.percentage}%</span></td>
                        <td>{formatDate(entry.date)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="leaderboard-footer">
                <span>Showing up to 50 recent attempts</span>
                <button className="clear-button" onClick={clearBoard}>Clear scores</button>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
