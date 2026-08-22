import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizProvider from "./context/QuizContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import LeaderBoard from "./pages/LeaderBoard";

const Result = lazy(() => import("./pages/Result"));

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <Suspense fallback={<div className="page-loader"><span className="loader" /> Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
