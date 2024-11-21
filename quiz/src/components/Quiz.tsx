import { useState } from "react";

interface QuizProps {
  id: number;
  topic: string;
  question: string;
  choices: string[];
  correctAnswer: string;
}

export function Quiz({ questions }: { questions: QuizProps[] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<null | number>(null);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [score, setScore] = useState(0);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswer = (choice: string, idx: number) => {
    setSelectedIdx(idx);
    if (choice === correctAnswer) {
      setIsCorrect(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const onNext = () => {
    setSelectedIdx(null);
    setIsCorrect(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      alert(
        `Quiz finished! Your total score is ${score} out of ${questions.length}`
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "beige",
        padding: "10px 20px",
        color: "black",
        borderRadius: "8px",
        minWidth: "600px",
        margin: "auto",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <span style={{ fontSize: "24px" }}>{currentQuestion + 1}</span>
        <span>/{questions.length}</span>
      </div>

      <h3>{question}</h3>

      <div>
        {choices.map((choice, idx) => (
          <p
            key={idx}
            onClick={() => onAnswer(choice, idx)}
            style={{
              cursor: "pointer",
              padding: "10px",
              margin: "5px 0",
              border: "2px solid black",
              borderRadius: "4px",
              backgroundColor:
                selectedIdx === idx
                  ? isCorrect
                    ? "lightgreen"
                    : "salmon"
                  : "white",
            }}
          >
            {choice}
          </p>
        ))}
      </div>

      <button
        onClick={onNext}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}
