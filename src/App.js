import { useState, useEffect } from "react";
import ColorOptions from "../src/components/ColorOptions/ColorOptions";
import ColorToGuess from "../src/components/ColorToGuess/ColorToGuess";
import CorrectGuessesInARow from "../src/components/CorrectGuessesInARow/CorrectGuessesInARow";
import Header from "../src/components/Header/Header";
import WrongGuess from "../src/components/WrongGuess/WrongGuess";

function generateRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const App = () => {
  const [correctColor, setCorrectColor] = useState(generateRandomHexColor());
  const [correctGuessesInARow, setCorrectGuessesInARow] = useState(0);
  const [colorOptions, setColorOptions] = useState([]);
  const [wrongGuess, setWrongGuess] = useState(false);

  useEffect(() => {
    const options = [
      generateRandomHexColor(),
      generateRandomHexColor(),
      correctColor,
    ];
    shuffleArray(options);
    setColorOptions(options);
  }, [correctColor]);

  function handleButtonClick(guess) {
    if (guess === correctColor) {
      setCorrectGuessesInARow((prev) => prev + 1);
      setCorrectColor(generateRandomHexColor());
      setWrongGuess(false);
    } else {
      setCorrectGuessesInARow(0);
      setWrongGuess(true);
    }
  }

  return (
    <div data-testid="app">
      <Header />
      <CorrectGuessesInARow count={correctGuessesInARow} data-testid="correct-guesses-in-a-row-value" />
      <ColorToGuess color={correctColor} data-testid="color-to-guess" />
      <ColorOptions options={colorOptions} handleButtonClick={handleButtonClick} />
      {wrongGuess && <WrongGuess data-testid="wrong-guess" />}
    </div>
  );
};

export default App;
