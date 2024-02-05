const ColorToGuess = ({ color }) => {
  return (
    <div>
      <div
        data-testid="color-to-guess"
        style={{ backgroundColor: color, width: "350px", height: "350px" }}
      ></div>
    </div>
  );
};

export default ColorToGuess;
