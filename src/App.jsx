import "./App.css";
import Copy from "./components/Copy";
import Focus from "./components/Focus";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>useRef Hook</h2>
        <hr />
        <Focus />
        <hr />
        <Copy />
        <hr />
      </header>
    </div>
  );
}

export default App;
