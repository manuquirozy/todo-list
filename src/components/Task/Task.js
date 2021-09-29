import React, { useState, useEffect } from "react";

import EditModal from "../EditModal/EditModal";
import CircleIcon from "../../assets/CircleIcon";
import TickIcon from "../../assets/TickIcon";
import DeleteIcon from "../../assets/DeleteIcon";
import EditIcon from "../../assets/EditIcon";
import { CIRCLE, TICK, TODO } from "../../utils/constants";

import "./Task.css";

export default function Task(props) {
  const { task, onStateToggle, onTaskDelete, onTaskEdit } = props;

  const [icon, setIcon] = useState(CIRCLE);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    task.state === TODO ? setIcon(CIRCLE) : setIcon(TICK);
  }, [task, icon]);

  function handleEditSubmit(event) {
    event.preventDefault();
    setOpen(false);
    onTaskEdit(task.id, task.state, event.target[0].value);
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
      {props.children}
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
        <EditModal originalText={task.text} onEditSubmit={handleEditSubmit} />
      )}
    </div>
  );
}
