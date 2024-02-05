const CorrectGuessesInARow = ({ count }) => {
  return (
    <div>
      <div data-testid="correct-guesses-in-a-row-text">
        Correct guesses in a row:
      </div>
      <div data-testid="correct-guesses-in-a-row-value">{count}</div>
    </div>
  );
};

export default CorrectGuessesInARow;
