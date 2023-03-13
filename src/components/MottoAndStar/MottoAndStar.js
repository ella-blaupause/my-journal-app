import "./MottoAndStar.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function MottoAndStar({
  children,
  id,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="mottoAndStar">
      <h3 className="motto ">"{children}"</h3>

      <button className="star" onClick={() => onToggleFavorite(id)}>
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    </div>
  );
}
