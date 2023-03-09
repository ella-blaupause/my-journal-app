import "./Entries.css";
import Date from "../Date/Date";
import MottoAndStar from "../MottoAndStar/MottoAndStar";
import Notes from "../Notes/Notes";
import Divider from "../Divider/Divider";

export default function Entries() {
  return (
    <div className="entries">
      <Date>FEB 27, 2028</Date>
      <div className="entryContent">
        <MottoAndStar isFill>That`s life in the city</MottoAndStar>
        <Notes>
          Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
          mihi. Et quidem se repellere, idque instituit docere sic omne animal,
          simul atque.
        </Notes>
        <Divider />

        <Date>FEB 26, 2028</Date>
        <div className="entryContent">
          <MottoAndStar>That`s life in the city</MottoAndStar>
          <Notes>
            Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
            mihi. Et quidem se repellere, idque instituit docere sic omne
            animal, simul atque.
          </Notes>
          <Divider />
        </div>

        <Date>FEB 27, 2028</Date>
        <div className="entryContent">
          <MottoAndStar>That`s life in the city</MottoAndStar>
          <Notes>
            Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
            mihi. Et quidem se repellere, idque instituit docere sic omne
            animal, simul atque.
          </Notes>
        </div>
      </div>
    </div>
  );
}
