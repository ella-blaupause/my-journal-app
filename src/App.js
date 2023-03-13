import "./App.css";
import Content from "./components/content/Content";
import EntryForm from "./components/EntryForm/EntryForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Entries from "./components/Entries/Entries";
import { useState } from "react";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
    isFavorite: false,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const favoriteEntries = entries.filter(
    (favoriteEntry) => favoriteEntry.isFavorite === true
  );
  const [filter, setFilter] = useState("all");

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      {
        ...newEntry,
        date,
        id: uid(),
      },
      ...entries,
    ]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  return (
    <div>
      <Header>Journal</Header>
      <Content>
        <EntryForm onAddEntry={handleAddEntry} />

        <div className="entries-and-tabs">
          <Tabs
            onShowAllEntries={handleShowAllEntries}
            onShowFavoriteEntries={handleShowFavoriteEntries}
            filter={filter}
            allEntriesCount={entries.length}
            favoriteEntriesCount={favoriteEntries.length}
          />
          <Entries
            entries={filter === "all" ? entries : favoriteEntries}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
      </Content>

      <Footer>Journal App — 2028</Footer>
    </div>
  );
}

export default App;
