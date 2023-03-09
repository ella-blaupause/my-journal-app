import "./Tab.css";

export default function Tab({ children, count, color, countColor }) {
  return (
    <>
      <p className="tab-text" style={{ color: color }}>
        {children}
      </p>
      <button
        className="tab-count"
        style={{ backgroundColor: color, color: countColor }}
      >
        {count}
      </button>
    </>
  );
}
