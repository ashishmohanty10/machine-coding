import { UIEventHandler, useState } from "react";

interface ComponentProp {
  list: number[];
  width: number;
  height: number;
  itemHeight: number;
}

export default function VirtualizedComponents({
  list,
  width,
  height,
  itemHeight,
}: ComponentProp) {
  console.log(width, height);

  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.target;
    console.log(scrollTop);
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(scrollTop / itemHeight);

    setIndices([newStartIndex, newEndIndex]);
  };

  const visibleState = list.slice(indices[0], indices[1] + 1);
  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{ height, width, backgroundColor: "grey", overflow: "auto" }}
    >
      <div style={{ height: list.length + itemHeight, position: "relative" }}>
        {visibleState.map((item, idx) => {
          return (
            <div
              className="item"
              key={idx}
              style={{
                height: itemHeight,
                position: "absolute",
                top: (indices[0] + idx) * itemHeight,
                backgroundColor: "blue",
                border: "1px solid red",
                width: "100%",
                textAlign: "center",
              }}
            >
              {"Item" + item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
