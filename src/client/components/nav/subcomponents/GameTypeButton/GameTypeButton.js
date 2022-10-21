import React, { useContext } from "react";
import { Change, GameType } from "../../../../context/appContext";
import "./GameTypeButton.css";

const GameTypeButton = ({ type }) => {
  const change = useContext(Change);
  const gameType = useContext(GameType);
  return (
    <button
      className="type__button"
      type="button"
      onClick={() => {
        if (type !== gameType.gameType) change.toggleChange(true);
        gameType.toggleGameType(type);
      }}
    >
      {type}
    </button>
  );
};

export default GameTypeButton;
