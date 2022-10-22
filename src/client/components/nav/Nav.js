import React from "react";
import "./Nav.css";
import { TIME, WORD } from "../../consts";
import GameTypeButton from "./subcomponents/GameTypeButton/GameTypeButton";
import GameLengthButton from "./subcomponents/GameLengthButton/GameLengthButton";

const Nav = () => {
  //returning what is supposed to be rendered
  return (
    <div className="nav__wrapper">
      {/* buttons which after they are clicked set the length of the game */}
      <GameLengthButton value={100} />
      <GameLengthButton value={50} />
      <GameLengthButton value={25} />
      <GameLengthButton value={10} />
      {/* uttons which after they are clicked set the type of the game */}
      <GameTypeButton type={WORD} />
      <GameTypeButton type={TIME} />
    </div>
  );
};

export default Nav;
