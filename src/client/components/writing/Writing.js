import React, { useState, useContext } from "react";
import TextField from "../TextField/TextField";
import "./writing.css";
import { WordsSample } from "../../context/appContext";
import WritingInput from "./subcomponents/WritingInput";

const Writing = () => {
  const [value, setValue] = useState("");
  const words = useContext(WordsSample);
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="writing__wrapper">
      <div className="writing">
        <TextField inputValue={value} />
        <WritingInput change={handleOnChange} value={value} />
      </div>
    </div>
  );
};

export default Writing;
