import React from "react";
import { StyledTasksList } from "../Styles/TasksList.styled";

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <StyledTasksList>
          <li key={id}>
            <div>
              <h2>{title}</h2>
              <button class="delete-button" onClick={() => handleDelete(id)}>
                X
              </button>
            </div>
            {!description ? null : <p>{description}</p>}
          </li>
        </StyledTasksList>
      ))}
    </ul>
  );
}
