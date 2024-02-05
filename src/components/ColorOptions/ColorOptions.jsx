const ColorOptions = ({ options, handleButtonClick }) => {
  return (
    <div data-testid="color-options">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default ColorOptions;
