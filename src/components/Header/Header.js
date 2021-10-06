import React from "react";

import "./Header.css";

import Filter from "../Filter/Filter";
import NewTask from "../NewTask/NewTask";
import logo from "../../assets/logo.png";

export default function Header(props) {
  const { onFilter, onTaskAdd } = props;

  return (
    <header className="App-header">
      <div id="Top-header">
        <img src={logo} alt="Logo" id="Logo" />
        <h1 id="Title">My to-do List</h1>
      </div>
      <div id="Bottom-header">
        <Filter onFilter={onFilter} />
      </div>
      <NewTask onTaskAdd={onTaskAdd} />
    </header>
  );
}
