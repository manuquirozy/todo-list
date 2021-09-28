import React, { useState, useEffect } from "react";

import EditModal from "../EditModal/EditModal";
import CircleIcon from "../../assets/CircleIcon";
import TickIcon from "../../assets/TickIcon";
import DeleteIcon from "../../assets/DeleteIcon";
import EditIcon from "../../assets/EditIcon";

import "./ToDo.css";

export default function Menu(props) {
  const { toDo, toggleState, deleteToDo, editToDo } = props;

  const [icon, setIcon] = useState("Circle");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    toDo.state === "ToDo" ? setIcon("Circle") : setIcon("Tick");
  }, [toDo, icon]);

  function handleSubmit(event) {
    event.preventDefault();
    setOpen(false);
    editToDo(toDo.id, toDo.state, event.target[0].value);
  }

  return (
    <div className="ToDo">
      {icon === "Circle" ? (
        <CircleIcon
          className="Icon"
          onClick={() => {
            setIcon("Tick");
            toggleState(toDo.id);
          }}
        />
      ) : (
        <TickIcon
          className="Icon"
          onClick={() => {
            setIcon("Circle");
            toggleState(toDo.id);
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
          deleteToDo(toDo.id);
        }}
      />
      {open && <EditModal originalText={toDo.text} handleSubmit={handleSubmit} />}
    </div>
  );
}
