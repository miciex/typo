import React, { useContext } from "react";
import { Change, GameType } from "../../../../context/appContext";
import "./GameTypeButton.css";

const GameTypeButton = ({ type }) => {
  //getting the context
  const change = useContext(Change);
  const gameType = useContext(GameType);
  //returning what is supposed to be rendered
  return (
    <button
      className="type__button"
      type="button"
      onClick={() => {
        //the value of state 'change' is set to true if the its state before is different from what it is supposed to be now. Which means the game restarts
        if (type !== gameType.gameType) change.toggleChange(true);
        //the value of state 'gameType' is set to variable 'type' which comes from props. That means that the type of the game is set to 'type' if type is equal to word the length of the game is counted in words if type is time the length of the game is counted in seconds.
        gameType.toggleGameType(type);
      }}
    >
      {type}
    </button>
  );
};

export default GameTypeButton;
