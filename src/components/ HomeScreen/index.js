import "./style.css";

export function HomeScreen({ setShowHomePage }) {
  return (
    <div className="homeScreen">
      <h1> algo</h1>
      <button
        onClick={() => {
          setShowHomePage(false);
        }}
      >
        Click para sumir
      </button>
    </div>
  );
}
