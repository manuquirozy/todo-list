import React, { useState } from "react";

import "./NewTask.css";

export default function NewTask({ onTaskAdd = () => {}, isEdit=false }) {
  const [text, setText] = useState("");

  function handleInputChange(e) {
    setText(e.target.value);
  }

  return (
    <form
      className="HeaderForm"
      onSubmit={(e) => {
        e.preventDefault()
        onTaskAdd(text);
        setText("");
      }}
    >
      {!isEdit && <label>Add task</label>}
      <input
        className="Input"
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <input className="Button" type="submit" value={!isEdit ? 'Add' : 'Update'} />
    </form>
  );
}
