import React, { useEffect, useState } from "react";

import "./EditModal.css";

export default function EditModal(props) {
  const { originalText, onEditSubmit } = props;
  const [text, setText] = useState("");

  function handleInputChange(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    setText(originalText);
  }, [originalText]);

  return (
    <div className="Window">
      <div className="EditContainer">
        <h1>Edit task</h1>
        <form
          className="EditForm"
          onSubmit={(e) => {
            onEditSubmit(e);
            setText("");
          }}
        >
          <input
            className="Input EditField"
            type="text"
            value={text}
            onChange={handleInputChange}
          />
          <input className="Button Edit" type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
}
