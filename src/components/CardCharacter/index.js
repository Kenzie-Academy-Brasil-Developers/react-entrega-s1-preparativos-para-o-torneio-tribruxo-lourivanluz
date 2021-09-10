import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { imagens } from "../../img/Img";
import "./style.css";

export function CardCharacter({
  person: { name, house, image, alive },
  showLogo,
}) {
  const [logoVisible, setlogoVisible] = useState(true);

  /* useEffect(() => {
    console.Console(showLogo);
    setlogoVisible(true);
  }, [showLogo]);
 */
  console.log(alive);
  const firstLetter = house[0];

  return (
    <div className={`card ${house.toLowerCase()}`}>
      {logoVisible && (
        <img
          className="logo"
          src={imagens[house.toLowerCase()]}
          alt="logo house"
          onClick={() => {
            setlogoVisible(false);
          }}
        />
      )}

      {!logoVisible && (
        <div className="cardInfo">
          <img src={image} alt="info person" />
          <h1>{name}</h1>
          <h2>{alive ? "Está vivo" : "Não está vivo"}</h2>
          <h2 className="houseName">
            <span className="houseName--firstLatter">{firstLetter}</span>
            <span className="houseName--endLatters">{house.slice(1)}</span>
          </h2>
        </div>
      )}
    </div>
  );
}
