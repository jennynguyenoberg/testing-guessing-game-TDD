import Color from "./components/Color/Color";
import Header from "./components/Header/Header";
import WrongGuess from "./components/WrongGuess/WrongGuess";

function App() {
  return (
    <div className="App">
      <Header />
      <WrongGuess />
      <Color />
    </div>
  );
}

export default App;
