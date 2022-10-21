import React, { useEffect, useContext } from "react";
import { WORD } from "../../consts";
import {
  GameType,
  WordsSample,
  Change,
  GameLength,
} from "../../context/appContext";
import Word from "./subcomponents/word/Word";
import "./TextField.css";

let words = [];

const TextField = ({ inputValue }) => {
  let context;
  const sample = useContext(WordsSample);
  const type = useContext(GameType);
  const change = useContext(Change);
  const length = useContext(GameLength);
  console.log(type);
  if (
    type.gameType === WORD &&
    (words.length === 0 || change.change === true) &&
    sample.length !== 0
  ) {
    words = [];
    for (let i = 0; i < length.gameLength; i++) {
      let num = Math.floor(Math.random() * sample.length);
      words.push(sample[num]);
    }
    if (change.change === true) change.toggleChange(false);
  }
  inputValue = inputValue.split(" ");
  let correct = true;
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== inputValue[i]) {
      correct = false;
      break;
    }
  }
  if (correct && words.length > 0) {
    alert("correct");
  }
  context = words.map((word, index, array) => {
    return (
      <Word
        word={word}
        last={array[index + 1] ? false : true}
        key={Math.random() + word}
        inputWord={inputValue[index] || ""}
      />
    );
  });
  return <div className="txt__wrapper">{context}</div>;
};

export default TextField;
