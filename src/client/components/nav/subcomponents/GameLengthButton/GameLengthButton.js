import React, { useContext } from "react";
import { Change, GameLength } from "../../../../context/appContext";
import "./GameLengthButton.css";

const GameLengthButton = ({ value }) => {
  //getting the context
  const change = useContext(Change);
  const length = useContext(GameLength);
  //returning what is supposed to be rendered
  return (
    <button
      className="length__button"
      type="button"
      value={value}
      onClick={() => {
        //the value of state 'change' is set to true which means the game restarts
        change.toggleChange(true);
        //the value of state 'length' is set to variable 'value' which comes from props. That means that the length of the game is set to 'value' this length is either in seconds or words depends on the 'gameType' state.
        length.toggleGameLength(value);
      }}
    >
      {value}
    </button>
  );
};

export default GameLengthButton;
