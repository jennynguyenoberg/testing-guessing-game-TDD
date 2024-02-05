const Color = ({ color }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: color, width: "200px", height: "200px" }}
      ></div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "black",
        }}
      >
        {color}
      </button>
    </div>
  );
};

export default Color;
