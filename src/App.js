import { useEffect, useState } from "react";
import "./App.css";
import { HomeScreen } from "./components/ HomeScreen";
import { SortScreen } from "./components/SortScreen";

function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [players, setPlayers] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setAllStudents(response))
      .catch((error) => console.error("Erro: " + error));
  }, []);

  const randomNumber = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };
  const sortStudents = (stutends) => {
    const result = [];
    while (result.length < 3) {
      let number = randomNumber(10);
      let player = stutends[number];
      if (result.every((item) => item.house !== player.house)) {
        result.push(player);
      }
    }

    setPlayers(result);
  };
  return (
    <div className="App">
      {showHomePage && (
        <HomeScreen
          setShowHomePage={setShowHomePage}
          allStudents={allStudents}
          sortStudents={sortStudents}
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
              sortStudents(allStudents);
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
