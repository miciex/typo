import React from "react";
import "./Nav.css";
import { TIME, WORD } from "../../consts";
import GameTypeButton from "./subcomponents/GameTypeButton/GameTypeButton";
import GameLengthButton from "./subcomponents/GameLengthButton/GameLengthButton";

const Nav = () => {
  return (
    <div className="nav__wrapper">
      <GameLengthButton value={100} />
      <GameLengthButton value={50} />
      <GameLengthButton value={25} />
      <GameLengthButton value={10} />
      <GameTypeButton type={WORD} />
      <GameTypeButton type={TIME} />
    </div>
  );
};

export default Nav;
