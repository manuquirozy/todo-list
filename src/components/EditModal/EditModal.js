import React, { useEffect, useState } from "react";

import "./EditModal.css";

export default function EditModal(props) {
  const { originalText, handleSubmit } = props;
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  useEffect(() => {
    setText(originalText)
  }, [originalText]);

  return (
    <div className="Window">
      <div className="EditContainer">
        <h1>Edit task</h1>
        <form
          className="EditForm"
          onSubmit={(event) => {
            handleSubmit(event);
            setText("");
          }}
        >
          <input
            className="Input EditField"
            type="text"
            value={text}
            onChange={handleChange}
          />
          <input className="Button Edit" type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
}
