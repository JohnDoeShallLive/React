import { useState } from "react";

function Color() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      <button onClick={() => changeColor("white")}>White</button>
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("pink")}>Pink</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
      <button onClick={() => changeColor("black")}>Black</button>
      <button onClick={() => changeColor("yellow")}>Yellow</button>
    </div>
  );
}

export default Color;
