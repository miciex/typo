import React, { useContext } from "react";
import { Change, GameLength } from "../../../../context/appContext";
import "./GameLengthButton.css";

const GameLengthButton = ({ value }) => {
  const change = useContext(Change);
  const length = useContext(GameLength);
  return (
    <button
      className="length__button"
      type="button"
      value={value}
      onClick={() => {
        console.log(Change);
        change.toggleChange(true);
        length.toggleGameLength(value);
      }}
    >
      {value}
    </button>
  );
};

export default GameLengthButton;
