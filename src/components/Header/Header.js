import React, { useState } from "react";

import "./Header.css";

import logo from "../../assets/logo.png";

export default function Header(props) {
  const { handleFilter, handleSubmit } = props;
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <header className="App-header">
      <div id="Top-header">
        <img src={logo} alt="Logo" id="Logo" />
        <h1 id="Title">My to-do List</h1>
      </div>
      <div id="Bottom-header">
        <ul className="Header">
          <li onClick={() => handleFilter("All")} className="Header-item">
            All
          </li>
          <li onClick={() => handleFilter("ToDo")} className="Header-item">
            To do
          </li>
          <li onClick={() => handleFilter("Done")} className="Header-item">
            Done
          </li>
        </ul>
      </div>
      <form
        className="HeaderForm"
        onSubmit={(event) => {
          handleSubmit(event);
          setText("");
        }}
      >
        <label>Add task</label>
        <input
          className="Input"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <input className="Button" type="submit" value="Add" />
      </form>
    </header>
  );
}
