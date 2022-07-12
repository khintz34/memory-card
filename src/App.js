import "../src/styles/App.css";
import ScoreBoard from "./components/ScoreBoard";
import Title from "./components/Title";
import CardBox from "./components/CardBox";

function App() {
  return (
    <div className="App">
      <Title />
      <p>Its Simple: Don't click the same card twice!</p>
      <ScoreBoard />
      <CardBox />
    </div>
  );
}

export default App;
