import React, { useState, useEffect } from "react";

export default function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [userInput, setUserInput] = useState("");

  // renders every time
  useEffect(() => {
    console.log("I render every time");
  });

  // renders only on the first instance
  useEffect(() => {
    window.addEventListener("resize", changeWindow);
    console.log("I rendered");
  }, []);

  // renders only when X has changed + first time
  useEffect(() => {
    console.log("I rendered since input has changed");
  }, [userInput]);

  const changeWindow = () => {
    setWidth(window.innerWidth);
  };

  const input = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <div>
        <h2>This is my window width: {width} </h2>
      </div>
      <div>
        <label>Type here: </label>
        <input type="text" value={userInput} onChange={input}></input>
        <br></br>
        <br></br>
        <label>Copycat: </label>
        {userInput}
      </div>
    </>
  );
}
