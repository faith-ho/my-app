import React from "react";
import { StyledCVSection } from "../Styles/CVSection.styled";

export default function CVSection({
  chosenSection,
  sectionHeading,
  role,
  location,
  description,
}) {
  if (chosenSection === "Education") {
    sectionHeading = "Education Section";
    role = "MSc International Political Economy";
    location = "London School of Economics";
    description =
      "Frequently assessed essay-writing, weekly presentations with Q&As, weekly research memos, two-team policy debates, completing problem-sets that compared 2-3 economic policy papers, and using R and STATA to conduct data analysis.";
  }

  if (chosenSection === "Work Experience") {
    sectionHeading = "Work Experience Heading";
    role = "Work Experience Role";
    description = "Work Experience Description";
  }

  if (chosenSection === "Extra-Curricular Experience") {
    sectionHeading = "Extra-Curricular Experience";
    role = "Extra-Curricular Role";
    description = "Extra-Curricular Description";
  }

  return (
    <StyledCVSection>
      <h2>{sectionHeading}</h2>
      <h3>{role}</h3>
      <h4>{location}</h4>
      <body>• {description}</body>
    </StyledCVSection>
  );
}
