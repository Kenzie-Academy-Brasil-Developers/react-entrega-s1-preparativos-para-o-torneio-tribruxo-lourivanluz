import "./style.css";

export function HomeScreen({
  setShowHomePage,
  drawPlayer,
  houseSort,
  drawHouse,
}) {
  return (
    <div className="homeScreen">
      <h1> O torneio Tribruxo vai começar!!</h1>
      <h2> Prepare-se</h2>
      <button
        className="btn-grad"
        onClick={() => {
          drawPlayer(houseSort, drawHouse);
          setShowHomePage(false);
        }}
      >
        Iniciar torneio
      </button>
    </div>
  );
}
