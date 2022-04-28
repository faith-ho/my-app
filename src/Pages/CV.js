import React, { useState } from "react";
import "./CV.css";
import CVSection from "../Components/CVList";

export default function CV() {
  const [pageTitle, setPageTitle] = useState();
  const [chosenPage, setChosenPage] = useState("");

  const handleClick = (section) => {
    setPageTitle(section);
    setChosenPage(<CVSection chosenSection={section} />);
  };

  return (
    <div>
      <h2>This is my CV page</h2>
      <h3>This is the chosen page: {pageTitle}</h3>
      <button
        onClick={() => {
          handleClick("Education");
        }}
      >
        Education
      </button>
      <button
        onClick={() => {
          handleClick("Work Experience");
        }}
      >
        Work Experience
      </button>
      <button
        onClick={() => {
          handleClick("Extra-Curricular Experience");
        }}
      >
        Extra-Curricular Experience
      </button>
      <div>
        <body>{chosenPage}</body>
      </div>
    </div>
  );
}
