import { CardCharacter } from "../CardCharacter";
import "./style.css";
export function SortScreen({ chanps, showLogo }) {
  return (
    <div className="sortScreen">
      {chanps.map((item, index) => (
        <CardCharacter key={index} person={item} showLogo={showLogo} />
      ))}
    </div>
  );
}
