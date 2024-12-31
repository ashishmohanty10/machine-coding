import VirtualizedComponents from "./components/virtualized-list";

const list = Array.from({ length: 10000 }, (_, idx) => idx + 1);

export default function App() {
  return (
    <VirtualizedComponents
      list={list}
      height={300}
      width={400}
      itemHeight={35}
    />
  );
}
