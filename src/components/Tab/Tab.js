import "./Tab.css";

export default function Tab({ children, count, isActive, onClick }) {
  return (
    <button className="tab" type="button" onClick={onClick}>
      <p>{children}</p>
      <span className={`tab-count${isActive ? " tab-count__active" : ""}`}>
        {count}
      </span>
    </button>
  );
}
