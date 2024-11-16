import { useState } from "react";

function App() {
  const [sentence, setSentence] = useState("");
  const [transformedText, setTransformedText] = useState("");

  const transformText = (type: string) => {
    let transformed = sentence;
    switch (type) {
      case "UPPERCASE":
        transformed = sentence.toUpperCase();
        break;
      case "lowercase":
        transformed = sentence.toLowerCase();
        break;
      case "PascalCase":
        transformed = sentence
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join("");
        break;
      case "camelCase":
        transformed = sentence
          .split(" ")
          .map((word, index) =>
            index === 0
              ? word.toLowerCase()
              : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join("");
        break;
      case "snake_case":
        transformed = sentence.toLowerCase().split(" ").join("_");
        break;
      case "kebab-case":
        transformed = sentence.toLowerCase().split(" ").join("-");
        break;
      case "Trim":
        transformed = sentence.trim();
        break;
      default:
        transformed = sentence;
    }
    setTransformedText(transformed);
  };

  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-screen w-full">
      <textarea
        name="text"
        className="border border-slate-500 p-5 text-xl w-1/2 h-32"
        placeholder="Write here to format"
        onChange={(e) => setSentence(e.target.value)}
      ></textarea>

      <div className="flex gap-2">
        <Button text="UPPERCASE" onClick={() => transformText("UPPERCASE")} />
        <Button text="lowercase" onClick={() => transformText("lowercase")} />
        <Button text="PascalCase" onClick={() => transformText("PascalCase")} />
        <Button text="camelCase" onClick={() => transformText("camelCase")} />
        <Button text="snake_case" onClick={() => transformText("snake_case")} />
        <Button text="kebab-case" onClick={() => transformText("kebab-case")} />
        <Button text="Trim" onClick={() => transformText("Trim")} />
      </div>

      <div>
        <p className="text-lg font-medium">Transformed string</p>
        <p className="text-base font-normal text-center">
          {transformedText || "Hello world"}
        </p>
      </div>
    </div>
  );
}

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      className="px-4 py-2 bg-slate-300 hover:bg-slate-400 transition rounded-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default App;
