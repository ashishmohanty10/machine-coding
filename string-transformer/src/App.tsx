import { useState } from "react";

function App() {
  const [sentence, setSentence] = useState("");
  const [style, setStyle] = useState("");

  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-screen w-full">
      <textarea
        name="text"
        id=""
        className="border border-slate-500 p-5 text-xl w-1/2 h-32"
        placeholder="write here to format"
        onChange={(e) => setSentence(e.target.value)}
      ></textarea>

      <div className="flex gap-2">
        <Button text={"UPPERCASE"} onclick={() => setStyle("uppercase")} />
        <Button text={"lowercase"} onclick={() => setStyle("lowercase")} />

        <Button text={"PascalCase"} onclick={() => setStyle("capitalize")} />
      </div>

      <div>
        <p className="text-lg font-medium">Transformed string</p>
        <p className={`${style} text-base font-normal  text-center`}>
          {sentence}
        </p>
      </div>
    </div>
  );
}

export default App;

const Button = ({ text, onclick }: { text: string; onclick: () => void }) => {
  return (
    <button className="px-4 py-2 bg-slate-300 rounded-md" onClick={onclick}>
      {text}
    </button>
  );
};
