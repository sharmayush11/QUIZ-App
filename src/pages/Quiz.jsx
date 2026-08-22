import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import useTimer from "../hooks/useTimer";

export default function Quiz() {
  const { state, dispatch } = useContext(QuizContext);
  const { index, questions } = state;
  const navigate = useNavigate();
  const { time, reset } = useTimer(15);

  useEffect(() => {
    if (time === 0) {
      dispatch({ type: "ANSWER", payload: false });
      reset();
    }
  }, [time, dispatch, reset]);

  useEffect(() => {
    if (index >= questions.length) {
      dispatch({ type: "FINISH" });
      navigate("/result", { replace: true });
    }
  }, [index, questions.length, dispatch, navigate]);

  if (!questions?.length || index >= questions.length) return null;

  const currentQuestion = questions[index];

  const handleSelect = (option) => {
    dispatch({ type: "ANSWER", payload: option === currentQuestion.answer });
    reset();
  };

  return (
    <main className="quiz-page">
      <div className="container quiz-container">
        <div className="quiz-topbar">
          <div>
            <p className="eyebrow mb-2"><span /> Live challenge</p>
            <h1>React Fundamentals</h1>
          </div>
          <Timer time={time} />
        </div>

        <ProgressBar current={index} total={questions.length} />

        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          onSelect={handleSelect}
        />

        <p className="quiz-tip">Tip: choose the answer you think is correct. There is no penalty for a wrong answer.</p>
      </div>
    </main>
  );
}
