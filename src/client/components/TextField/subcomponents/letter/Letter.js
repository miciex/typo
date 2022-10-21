import React from "react";
import "./Letter.css";

const Letter = ({ letter, inputLetter, correctLetter }) => {
  let className = "";
  if (inputLetter === correctLetter) className = "green";
  else if (inputLetter !== correctLetter) className = "red";
  if (inputLetter === " " || !inputLetter) className = "black";
  return <span className={className}>{letter}</span>;
};

export default Letter;
