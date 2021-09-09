import "./style.css";

export function HomeScreen({
  setShowHomePage,
  drawPlayer,
  houseSort,
  drawHouse,
}) {
  return (
    <div className="homeScreen">
      <h1> algo</h1>
      <button
        onClick={() => {
          drawPlayer(houseSort, drawHouse);
          setShowHomePage(false);
        }}
      >
        Click para sumir
      </button>
    </div>
  );
}

/* 
tenho uma funçao que atualiza o state de players [{}{}{}]

condiçao pra uma tela inicial que começa verdadeira e tem um botao que sumir ela e chamar a funçao de players
os playes sao chamados e inicia mostrando um escudo
quando clicado no escudo ele rederiza a imagem em baixo
quando clicado no bota do app ele sortea novamente 3 players que renderizar com o escudo tbm











*/
