import { useState } from "react";
import { imagens } from "../../img/Img";
import "./style.css";

export function CardCharacter({ person: { name, house, image, wand } }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`card ${house.toLowerCase()}`}>
      {!isVisible && (
        <img
          className="logo"
          src={imagens[house.toLowerCase()]}
          alt="logo house"
          onClick={() => setIsVisible(true)}
        />
      )}

      {isVisible && (
        <div className="cardInfo">
          <img src={image} alt="info person" />
          <h1>{name}</h1>
          <h2>{house}</h2>
          <h2>{"varinha"}</h2>
        </div>
      )}
    </div>
  );
}
