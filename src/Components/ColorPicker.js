import React, { useState } from "react";

export default function ColorPicker() {
  const [coinToss, setCoinToss] = useState("");
  const [chosenArrayColour, setChosenArrayColour] = useState(null);

  const flipCoin = () => {
    const random = Math.floor(Math.random() * 10 + 1);
    if (random % 2 === 0) {
      setCoinToss("heads");
    } else {
      setCoinToss("tails");
    }
  };

  const colorArray = ["#f7ca98", "#e5946a", "#bb755b", "#d3aca4"];

  const randomColour = () => {
    const randomColourPicker =
      colorArray[Math.floor(Math.random() * colorArray.length)];
    setChosenArrayColour(randomColourPicker);
  };

  return (
    <div>
      <h3>This is my Colour Picker app</h3>
      <button value={coinToss} onClick={flipCoin}>
        Flip a Coin
      </button>
      <body>The coin landed on: {coinToss}</body>
      <button onClick={randomColour}>Random Colour</button>
      <body>You chose this colour from the array: {chosenArrayColour} </body>
    </div>
  );
}
