import "./App.css";
import { Quiz } from "./components/Quiz";
import { quizQuestions } from "./data";

function App() {
  return (
    <div>
      <Quiz questions={quizQuestions.questions} />
    </div>
  );
}

export default App;
