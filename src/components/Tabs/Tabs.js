import "./Tabs.css";
import Tab from "../Tab/Tab";

export default function Tabs() {
  return (
    <div className="tabs">
      {/* <li> */}
      <Tab color="var(--color-nemo)" countColor="white" count="3">
        All Entries
      </Tab>
      {/*  </li>
      <li> */}
      <Tab count="1">Favorites</Tab>
      {/* ‚ */}
    </div>
  );
}
