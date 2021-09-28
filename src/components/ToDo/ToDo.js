import React, { useState, useEffect } from "react";

import CircleIcon from "../../assets/CircleIcon";
import TickIcon from "../../assets/TickIcon";
import DeleteIcon from "../../assets/DeleteIcon";

import "./ToDo.css";

export default function Menu(props) {
  const { state, id, toggleState, deleteToDo } = props;

  const [icon, setIcon] = useState("Circle");

  useEffect(() => {
    state === "ToDo" ? setIcon("Circle") : setIcon("Tick");
  }, [state, icon]);

  return (
    <div className="ToDo">
      {icon === "Circle" ? (
        <CircleIcon
          className="Icon"
          onClick={() => {
            setIcon("Tick");
            toggleState(id);
          }}
        />
      ) : (
        <TickIcon
          className="Icon"
          onClick={() => {
            setIcon("Circle");
            toggleState(id);
          }}
        />
      )}
      {props.children}
      <DeleteIcon
        className="Icon"
        onClick={() => {
          deleteToDo(id);
        }}
      />
    </div>
  );
}
