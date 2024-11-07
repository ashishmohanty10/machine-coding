import { useState } from "react";

interface AccordionProp {
  title: string;
  content: string;
}

export function AccordionComponent({ title, content }: AccordionProp) {
  const [showAccordion, setShowAccordion] = useState<boolean>(false);

  const handleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <div className="accordion">
      <h1 className="accordion-title">
        {title}{" "}
        <span onClick={handleAccordion} className="plus">
          +
        </span>
      </h1>
      {showAccordion && <p className="accordion-content">{content}</p>}
    </div>
  );
}
