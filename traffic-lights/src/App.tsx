import { useEffect, useState } from "react";

const defaultConfig = {
  red: {
    duration: 4000,
    next: "green",
    backgroundColor: "red",
  },
  yellow: {
    duration: 500,
    next: "red",
    backgroundColor: "yellow",
  },
  green: {
    duration: 3000,
    next: "yellow",
    backgroundColor: "green",
  },
};

export default function App({
  initialColor = "green",
  config = defaultConfig,
  layout = "vertical",
}) {
  const [currentColor, setCurrentColor] = useState(initialColor);

  useEffect(() => {
    const { duration, next } = config[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor, config]);

  return (
    <div
      aria-live="polite"
      aria-label={`Current light: ${currentColor}`}
      className={[
        "flex justify-center items-center gap-2 w-full h-screen",
        layout === "vertical" && "flex-col",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          backgroundColor={
            color === currentColor ? config[color].backgroundColor : undefined
          }
        />
      ))}
    </div>
  );
}

function Light({ backgroundColor }: { backgroundColor: string | undefined }) {
  return (
    <div
      aria-hidden="true"
      className="w-16 h-16 rounded-full transition-all duration-500 bg-black"
      style={{ backgroundColor }}
    />
  );
}
