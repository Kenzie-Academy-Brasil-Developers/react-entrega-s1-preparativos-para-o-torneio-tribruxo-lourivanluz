import { useState } from "react";
import "./App.css";
import { HomeScreen } from "./components/ HomeScreen";
import { SortScreen } from "./components/SortScreen";

function App() {
  const [showHomePage, setShowHomePage] = useState(true);

  const data = [
    {
      name: "Harry Potter",
      house: "Gryffindor",
      wand: {
        wood: "holly",
        core: "phoenix feather",
        length: 11,
      },
      image: "http://hp-api.herokuapp.com/images/harry.jpg",
    },
    {
      name: "Hermione Granger",
      house: "Gryffindor",
      wand: {
        wood: "vine",
        core: "dragon heartstring",
        length: "",
      },
      image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    },
    {
      name: "Ron Weasley",
      house: "Gryffindor",
      wand: {
        wood: "willow",
        core: "unicorn tail-hair",
        length: 14,
      },
      image: "http://hp-api.herokuapp.com/images/ron.jpg",
    },
  ];

  return (
    <div className="App">
      {showHomePage && <HomeScreen setShowHomePage={setShowHomePage} />}
      <SortScreen chanps={data} />
    </div>
  );
}

export default App;
