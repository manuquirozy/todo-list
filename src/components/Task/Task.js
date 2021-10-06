import React, { useState, useEffect } from "react";

import EditModal from "../EditModal/EditModal";
import CircleIcon from "../../assets/CircleIcon";
import TickIcon from "../../assets/TickIcon";
import DeleteIcon from "../../assets/DeleteIcon";
import EditIcon from "../../assets/EditIcon";
import { CIRCLE, TICK, TODO } from "../../utils/constants";

import "./Task.css";

export default function Task({ task, onStateToggle, onTaskDelete, onTaskEdit }) {
  const [icon, setIcon] = useState(CIRCLE);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    task.state === TODO ? setIcon(CIRCLE) : setIcon(TICK);
  }, [task, icon]);

  function handleEditSubmit(id, text) {
    console.log({id, text})
    setOpen(false);
    onTaskEdit(id, text);
  }

  return (
    <div className="Task">
      {icon === CIRCLE ? (
        <CircleIcon
          className="Icon"
          onClick={() => {
            setIcon(TICK);
            onStateToggle(task.id);
          }}
        />
      ) : (
        <TickIcon
          className="Icon"
          onClick={() => {
            setIcon(CIRCLE);
            onStateToggle(task.id);
          }}
        />
      )}
      { task.text }
      <EditIcon
        className="Icon"
        onClick={() => {
          setOpen(true);
        }}
      />
      <DeleteIcon
        className="Icon"
        onClick={() => {
          onTaskDelete(task.id);
        }}
      />
      {open && (
        <EditModal task={task} onEditSubmit={handleEditSubmit} />
      )}
    </div>
  );
}
