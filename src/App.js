import React, { useState, useEffect } from "react";

import "./App.css";

import List from "./components/List/List";
import Header from "./components/Header/Header";
import { TODO, DONE, ALL } from "./utils/constants";

function App() {
  const [filter, setFilter] = useState(ALL);
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState([]);

  function handleFilter(filter) {
    setFilter(filter);
  }

  function handleAddTask(task) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text: task,
        state: TODO,
        id: Math.random().toString(36).substr(2, 9),
      },
    ]);
  }

  function handleToggleState(id) {
    setTasks([
      ...tasks.map((task) =>
      task.id === id
        ? { ...task, state: task.state === DONE ? TODO : DONE }
        : { ...task }
      ),
    ]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleEditTask(id, text) {
    console.log({id, text})
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: text } : { ...task }
      )
    );
  }

  useEffect(() => {
    filter === ALL
      ? setActive(tasks)
      : setActive(tasks.filter((task) => task.state === filter));
  }, [tasks, filter]);

  return (
    <div className="App">
      <Header onFilter={handleFilter} onTaskAdd={handleAddTask} />
      <List
        tasks={active}
        onStateToggle={handleToggleState}
        onTaskDelete={handleDeleteTask}
        onTaskEdit={handleEditTask}
      />
    </div>
  );
}

export default App;
