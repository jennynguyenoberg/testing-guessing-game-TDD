import Color from "./components/Color/Color";
import ColorOptions from "./components/ColorOptions/ColorOptions";
import ColorToGuess from "./components/ColorToGuess/ColorToGuess";
import Header from "./components/Header/Header";
import WrongGuess from "./components/WrongGuess/WrongGuess";

function App() {
  return (
    <div className="App">
      <Header />
      <Color />
      <ColorToGuess />
      <ColorOptions />
      <WrongGuess />
    </div>
  );
}

export default App;
