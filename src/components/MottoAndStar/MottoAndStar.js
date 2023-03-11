import "./MottoAndStar.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function MottoAndStar({ children }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="mottoAndStar">
      <h3 className="motto ">"{children}"</h3>

      <button
        className="star"
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    </div>
  );
}
