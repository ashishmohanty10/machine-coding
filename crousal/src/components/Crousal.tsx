import { ChevronLeft, ChevronRight } from "lucide-react";
import { imageData } from "../data";
import { useState } from "react";

export function Crousal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = imageData;

  const prevBtn = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  };

  const nextBtn = () => {
    setCurrentIndex((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };

  return (
    <div className="crousal-container">
      <button onClick={prevBtn}>
        <ChevronLeft></ChevronLeft>
      </button>

      <div key={images[currentIndex]}>
        <img src={images[currentIndex]} alt="" className="crousal-images" />
      </div>

      <button onClick={nextBtn}>
        <ChevronRight></ChevronRight>
      </button>
    </div>
  );
}
