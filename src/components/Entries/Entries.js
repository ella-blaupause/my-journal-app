import "./Entries.css";
import Date from "../Date/Date";
import MottoAndStar from "../MottoAndStar/MottoAndStar";
import Notes from "../Notes/Notes";
import Divider from "../Divider/Divider";
import { Fragment } from "react";

export default function Entries({ entries, onToggleFavorite }) {
  return (
    <div className="entries">
      <div className="entryContent">
        {entries.map((entry, index) => {
          return (
            <Fragment key={entry.id}>
              <Date>{entry.date}</Date>
              <MottoAndStar
                id={entry.id}
                isFavorite={entry.isFavorite}
                onToggleFavorite={onToggleFavorite}
              >
                {entry.motto}
              </MottoAndStar>
              <Notes>{entry.notes}</Notes>
              <Divider hidden={index < entries.length - 1 ? false : true} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
