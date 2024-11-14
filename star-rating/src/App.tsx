import { Dispatch, SetStateAction, useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-container">
      <StarRating rating={rating} setRating={setRating} />
      <h3>Your rating {rating}</h3>
    </div>
  );
}

export default App;

interface ratingProps {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}

function StarRating({ rating, setRating }: ratingProps) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item) => (
        <span
          key={item}
          className="star"
          style={{
            cursor: "pointer",
            fontSize: "35px",
            color: item <= rating ? "gold" : "gray", // Filled or empty star
          }}
          onClick={() => setRating(item)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
