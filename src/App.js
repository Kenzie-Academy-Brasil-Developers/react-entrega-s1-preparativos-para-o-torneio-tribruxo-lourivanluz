import { useEffect, useState } from "react";
import "./App.css";
import { HomeScreen } from "./components/ HomeScreen";
import { SortScreen } from "./components/SortScreen";

function App() {
  const [showHomePage, setShowHomePage] = useState(true);

  //const [data, setData] = useState([]);
  const [players, setPlayers] = useState([]);
  const [houseSort, setHouseSort] = useState({});

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        //setData(response);
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
    console.log("ai");
    const houseSelected = callback();
    const playersSelected = [];
    houseSelected.forEach((item) => {
      const players = data[item];
      const random = randomNumber(players.length - 1);
      playersSelected.push(players[random]);
    });
    console.log(playersSelected);
    setPlayers(playersSelected);
  };

  //drawHouse(houseSort, drawHouse);
  //no chanps preciso passar [{...},{...},{...}]
  return (
    <div className="App">
      {showHomePage && <HomeScreen setShowHomePage={setShowHomePage} />}
      {!showHomePage && (
        <>
          <SortScreen chanps={players} />
          <button onClick={() => drawPlayer(houseSort, drawHouse)}>
            Clicando
          </button>
        </>
      )}
    </div>
  );
}

export default App;
