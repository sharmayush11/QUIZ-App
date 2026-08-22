export default function QuestionCard({ question, options, onSelect }) {
  return (
    <section className="question-card">
      <div className="question-badge">Choose the best answer</div>
      <h2>{question}</h2>

      <div className="options-grid">
        {options.map((option, index) => (
          <button
            className="option-button"
            key={option}
            onClick={() => onSelect(option)}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span>{option}</span>
            <span className="option-arrow">→</span>
          </button>
        ))}
      </div>
    </section>
  );
}
