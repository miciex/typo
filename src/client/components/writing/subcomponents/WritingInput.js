import React, { useRef, useEffect } from "react";
import "./WritingInput.css";

const WritingInput = ({ value, change }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.selectionStart = inputRef.current.value.length;
    inputRef.current.selectionEnd = inputRef.current.value.length;
  }, [value]);
  return (
    <>
      <input
        type="text"
        className="writing__input"
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.selectionStart = inputRef.current.value.length;
          inputRef.current.selectionEnd = inputRef.current.value.length;
        }}
        onChange={(t) => {
          change(t);
          inputRef.current.focus();
          inputRef.current.selectionStart = inputRef.current.value.length;
          inputRef.current.selectionEnd = inputRef.current.value.length;
        }}
        value={value}
        spellCheck="false"
        ref={inputRef}
      />
    </>
  );
};

export default WritingInput;
