import React, { useEffect } from "react";
import { StyledTasksList } from "../Styles/TasksList.styled";

export default function TasksList({ allTasks, handleDelete }) {
  const colorPicker = (id) => {
    if (id % 2 === 0) {
      return "#f7ca98";
    } else {
      return "#e5946a";
    }
  };

  const colorArray = [
    "#f7ca98",
    "#e5946a",
    "#bb755b",
    "#d3aca4",
    "#b7d3c6",
    "#ffe8d9",
    "#b1d064",
  ];

  useEffect(() => {
    document.addEventListener("click", randomColour);
  }, []);

  const randomColour = () => {
    const randomColourPicker =
      colorArray[Math.floor(Math.random() * colorArray.length)];
    return randomColourPicker.toString();
  };

  return (
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <StyledTasksList bg={randomColour} color="black">
          <li key={id}>
            <div>
              <h2>{title}</h2>
              <button class="delete-button" onClick={() => handleDelete(id)}>
                X
              </button>
            </div>
            {!description ? null : <p>{description}</p>}
            <body>The id is: {id}</body>
          </li>
        </StyledTasksList>
      ))}
    </ul>
  );
}
