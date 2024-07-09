import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/kathrynsteg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kathryn Stegeman
        </a>{" "}
        and is hosted on{" "}
        <a
          href="https://stegeman-dictionary-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
