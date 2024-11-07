import { AccordionComponent } from "./components/Accordion";
import { data } from "./data";

export default function App() {
  return (
    <div className="accordion-container">
      {data.map((items) => (
        <div key={items.id}>
          <AccordionComponent title={items.title} content={items.content} />
        </div>
      ))}
    </div>
  );
}
