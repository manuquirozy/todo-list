import React from "react";

import Task from "../Task/Task";

import "./List.css";

export default function List(props) {
  const { tasks, onStateToggle, onTaskDelete, onTaskEdit } = props;

  return (
    <div className="ListContainer">
      {tasks.length > 0
        ? tasks.map((task) => {
            return (
              <Task
                task={task}
                onStateToggle={onStateToggle}
                onTaskDelete={onTaskDelete}
                onTaskEdit={onTaskEdit}
                key={task.id}
              >
                {task.text}
              </Task>
            );
          })
        : "There are no tasks to show!"}
    </div>
  );
}
