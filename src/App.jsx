import "./App.css";
import Copy from "./components/Copy";
import Focus from "./components/Focus";
import MediaPlayer from "./components/MediaPlayer";
import ScrollAnimation from "./components/ScrollAnimation";

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
        <MediaPlayer />
        <hr />
        <ScrollAnimation />
        <hr />
      </header>
    </div>
  );
}

export default App;
