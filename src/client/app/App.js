import React, { useEffect, useState } from "react";
import "./app.css";
import Writing from "../components/writing/Writing";
import Nav from "../components/nav/Nav";
import {
  WordsSample,
  GameType,
  Change,
  GameLength,
} from "../context/appContext";
import { WORD } from "../consts";

const App = () => {
  const [wordsSample, setWordsSample] = useState([]);
  const [gameType, setGameType] = useState(WORD);
  const [gameLength, setGameLength] = useState(50);
  const [change, setChange] = useState(false);
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/all")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setWordsSample(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleChange = (ch) => {
    setChange(ch);
  };

  const toggleGameType = (type) => {
    setGameType(type);
  };

  const toggleGameLength = (length) => {
    setGameLength(length);
  };

  return (
    <GameLength.Provider value={{ gameLength, toggleGameLength }}>
      <Change.Provider value={{ change, toggleChange }}>
        <GameType.Provider value={{ gameType, toggleGameType }}>
          <WordsSample.Provider value={wordsSample}>
            <div className="app__wrapper">
              <Nav />
              <Writing />
            </div>
          </WordsSample.Provider>
        </GameType.Provider>
      </Change.Provider>
    </GameLength.Provider>
  );
};

export default App;
