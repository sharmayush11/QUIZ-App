const questions = [
  {
    id: 1,
    question: "React is mainly used for?",
    options: ["Styling", "Mobile Apps", "Building user interfaces", "Databases"],
    answer: "Building user interfaces",
  },
  {
    id: 2,
    question: "Which hook is used to manage local state?",
    options: ["useEffect", "useState", "useMemo", "useContext"],
    answer: "useState",
  },
  {
    id: 3,
    question: "Which hook is commonly used for side effects?",
    options: ["useEffect", "useRef", "useReducer", "useId"],
    answer: "useEffect",
  },
  {
    id: 4,
    question: "Why does React use the key prop when rendering lists?",
    options: ["For CSS styling", "To identify list items", "To store state", "To call an API"],
    answer: "To identify list items",
  },
  {
    id: 5,
    question: "Which hook lets a component access context values?",
    options: ["useContext", "useCallback", "useMemo", "useLayoutEffect"],
    answer: "useContext",
  },
  {
    id: 6,
    question: "What does useReducer return?",
    options: ["A promise", "A state value and dispatch function", "Only a function", "A DOM node"],
    answer: "A state value and dispatch function",
  },
  {
    id: 7,
    question: "What is JSX?",
    options: ["A database", "A JavaScript syntax extension", "A CSS framework", "A testing library"],
    answer: "A JavaScript syntax extension",
  },
  {
    id: 8,
    question: "Which hook can hold a mutable value without causing a re-render?",
    options: ["useState", "useRef", "useEffect", "useContext"],
    answer: "useRef",
  },
  {
    id: 9,
    question: "What is a controlled input in React?",
    options: ["An input controlled by CSS", "An input whose value is managed by React state", "An input with no value", "An input controlled by the browser only"],
    answer: "An input whose value is managed by React state",
  },
  {
    id: 10,
    question: "What does React Router primarily help with?",
    options: ["Database queries", "Client-side navigation", "Image compression", "CSS animations"],
    answer: "Client-side navigation",
  },
];

export default questions;
