import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary defaultKeyword="cheese" />
        <footer className="text-center">Coded by Kathryn Stegeman</footer>
      </div>
    </div>
  );
}

export default App;
