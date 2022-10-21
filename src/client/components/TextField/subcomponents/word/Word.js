import React from "react";
import Letter from "../letter/Letter";
import "./Word.css";

const Word = ({ word = "", last, inputWord }) => {
  word = word.split("");
  let correctWord = [...word];
  inputWord = String(inputWord);
  inputWord = inputWord.split("");
  if (word.length <= inputWord.length) word = inputWord;
  else if (inputWord.length > 0) {
    for (let i = 0; i < inputWord.length; i++) {
      word[i] = inputWord[i];
    }
  }
  if (last === false) {
    word.push(" ");
    correctWord.push(" ");
  }
  const context = word.map((letter, index) => (
    <Letter
      correctLetter={correctWord[index] || ""}
      letter={letter}
      key={letter + Math.random()}
      inputLetter={inputWord[index]}
    />
  ));
  return <>{context}</>;
};

export default Word;
