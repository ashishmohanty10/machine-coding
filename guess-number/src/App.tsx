import { FormEvent, useState } from "react";

export default function App() {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(5);
  const [message, setMessage] = useState("");

  const handleGuess = (e: FormEvent) => {
    e.preventDefault();
    const numGuess = Number(guess);

    if (numGuess === randomNumber) {
      setMessage("🎉 Correct! You guessed the number.");
      return;
    }

    if (attempts > 1) {
      setAttempts(attempts - 1);
      setMessage(numGuess > randomNumber ? "📈 Too High!" : "📉 Too Low!");
    } else {
      setMessage(`😞 Game Over! The number was ${randomNumber}`);
    }
    setGuess("");
  };

  const handleRestart = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
    setGuess("");
    setAttempts(5);
    setMessage("");
  };

  return (
    <div className="game-container">
      <h1>🎯 Guess the Number</h1>
      <p className="instruction">Enter a number between 0 and 99</p>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="input-box"
          disabled={attempts === 0 || message.includes("Correct")}
        />
        <button
          className="guess-btn"
          disabled={attempts === 0 || message.includes("Correct")}
        >
          Submit Guess
        </button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="attempts">Attempts left: {attempts}</p>
      {attempts === 0 ||
        message.includes("Correct") ||
        (message.includes("😞 Game Over! The number was") && (
          <button onClick={handleRestart} className="restart-btn">
            Restart Game
          </button>
        ))}
    </div>
  );
}
