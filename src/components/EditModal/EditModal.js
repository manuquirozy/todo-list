import React from "react";

import "./EditModal.css";
import NewTask from "../NewTask/NewTask"

export default function EditModal({ task, onEditSubmit }) {

  function handleEditSubmit(text) {
    onEditSubmit(task.id, text)
  }

  return (
    <div className="Window">
      <div className="EditContainer">
        <h1>Edit task</h1>
        <NewTask onTaskAdd={(text) => handleEditSubmit(text)} isEdit={true}/>
      </div>
    </div>
  );
}
