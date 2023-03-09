import "./Button.css";

export default function Button({ children }) {
  return (
    <button className="button" typ="button">
      {children}
    </button>
  );
}
