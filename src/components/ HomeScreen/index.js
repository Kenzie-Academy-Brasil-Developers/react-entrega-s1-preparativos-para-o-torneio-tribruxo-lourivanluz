import "./style.css";

export function HomeScreen({ setShowHomePage, sortStudents, allStudents }) {
  return (
    <div className="homeScreen">
      <h1> O torneio Tribruxo vai começar!!</h1>
      <h2> Prepare-se</h2>
      <button
        className="btn-grad"
        onClick={() => {
          sortStudents(allStudents);
          setShowHomePage(false);
        }}
      >
        Iniciar torneio
      </button>
    </div>
  );
}
