import { useEffect, useState } from "react";
import "./App.css";
import { HomeScreen } from "./components/ HomeScreen";
import { SortScreen } from "./components/SortScreen";

function App() {
  const [showHomePage, setShowHomePage] = useState(true);

  const [showLogo, setShowLogo] = useState(true);
  const [players, setPlayers] = useState([]);
  const [houseSort, setHouseSort] = useState({});

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        setHouseSort({
          Gryffindor: filterHouse(response, "Gryffindor"),
          Hufflepuff: filterHouse(response, "Hufflepuff"),
          Ravenclaw: filterHouse(response, "Ravenclaw"),
          Slytherin: filterHouse(response, "Slytherin"),
        });
      })
      .catch((error) => console.error("Erro: " + error));
  }, []);

  const filterHouse = (data, house) => {
    return data.filter((item) => item.house === house);
  };
  const randomNumber = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  const drawHouse = () => {
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    const houseSelected = [];

    for (let count = 0; houseSelected.length !== 3; count++) {
      const random = randomNumber(3);
      if (!houseSelected.includes(houses[random])) {
        houseSelected.push(houses[random]);
      }
    }
    return houseSelected;
  };

  const drawPlayer = (data, callback) => {
    const houseSelected = callback();
    const playersSelected = [];
    houseSelected.forEach((item) => {
      const players = data[item];
      const random = randomNumber(players.length - 1);
      playersSelected.push(players[random]);
    });
    setPlayers(playersSelected);
  };

  return (
    <div className="App">
      {showHomePage && (
        <HomeScreen
          setShowHomePage={setShowHomePage}
          drawPlayer={drawPlayer}
          houseSort={houseSort}
          drawHouse={drawHouse}
        />
      )}
      {!showHomePage && (
        <>
          {showLogo && <SortScreen chanps={players} showLogo={showLogo} />}
          {!showLogo && <SortScreen chanps={players} showLogo={showLogo} />}
          <button
            className="btn-grad bnt-sortScreen"
            onClick={() => {
              setShowLogo(!showLogo);
              drawPlayer(houseSort, drawHouse);
            }}
          >
            Sortear
          </button>
        </>
      )}
    </div>
  );
}

export default App;
