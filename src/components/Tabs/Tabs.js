import "./Tabs.css";
import Tab from "../Tab/Tab";

export default function Tabs({
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <div className="tabs">
      <Tab
        onClick={onShowAllEntries}
        isActive={filter === "all" ? true : false}
        count={allEntriesCount}
      >
        All Entries
      </Tab>
      <Tab
        onClick={onShowFavoriteEntries}
        isActive={filter === "favorites" ? true : null}
        count={favoriteEntriesCount}
      >
        Favorites
      </Tab>
    </div>
  );
}
