import React, { useState, useEffect } from "react";

import "./App.css";

import List from "./components/List/List";
import Header from "./components/Header/Header";

function App() {
  const [filter, setFilter] = useState("All");
  const [toDos, setToDos] = useState([]);
  const [active, setActive] = useState([]);

  function handleFilter(filter) {
    setFilter(filter);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setToDos((prevToDos) => [
      ...prevToDos,
      {
        text: event.target[0].value,
        state: "ToDo",
        id: Math.random().toString(36).substr(2, 9),
      },
    ]);
  }

  function toggleState(id) {
    let toDosCopy = [...toDos];
    toDosCopy.forEach((toDo) => {
      toDo.id === id &&
        (toDo.state === "ToDo" ? (toDo.state = "Done") : (toDo.state = "ToDo"));
    });
    setToDos(toDosCopy);
  }

  function deleteToDo(id) {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  }

  function editToDo(id, state, text) {
    let toDosCopy = [...toDos];
    toDosCopy.forEach((toDo) => {
      toDo.id === id && (toDo.text = text);
    });
    setToDos(toDosCopy);
  }

  useEffect(() => {
    filter === "All"
      ? setActive(toDos)
      : setActive(toDos.filter((toDo) => toDo.state === filter));
  }, [toDos, filter]);

  return (
    <div className="App">
      <Header handleFilter={handleFilter} handleSubmit={handleSubmit} />
      <List
        toDos={active}
        toggleState={toggleState}
        deleteToDo={deleteToDo}
        editToDo={editToDo}
      />
    </div>
  );
}

export default App;
