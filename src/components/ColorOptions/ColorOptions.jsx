const ColorOptions = ({ options, handleButtonClick }) => {
  return (
    <div className="flex gap-10" data-testid="color-options">
      {options.map((option, index) => (
        <button
          className="bg-slate-100 px-5 py-4 text-sm rounded-lg"
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
