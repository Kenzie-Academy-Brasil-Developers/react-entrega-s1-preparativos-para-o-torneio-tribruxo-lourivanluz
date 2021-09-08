import "./style.css";
export function CardCharacter({ person: { name, house, image, wand } }) {
  const casa = house;
  const imagem = image;
  const setImage = (elemento) => {
    elemento.setAttribute("style", `background-image: url(${imagem});`);
  };

  return (
    <div className={`sortHouse ${house.toLowerCase()}`}>
      <div
        className={`border border--${house.toLowerCase()}`}
        onClick={(event) => setImage(event.target)}
      ></div>
      <h1>{name}</h1>
      <h2>{casa}</h2>
      <h2>variha</h2>
    </div>
  );
}
