import React, { useState } from "react";

import "./NewTask.css";

export default function Header(props) {
  const { onTaskAdd } = props;
  const [text, setText] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <form
      className="HeaderForm"
      onSubmit={(e) => {
        onTaskAdd(e);
        setText("");
      }}
    >
      <label>Add task</label>
      <input
        className="Input"
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <input className="Button" type="submit" value="Add" />
    </form>
  );
}
