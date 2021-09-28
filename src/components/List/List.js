import React from "react";

import ToDo from "../ToDo/ToDo";

import "./List.css";

export default function List(props) {
  const { toDos, toggleState, deleteToDo, editToDo } = props;

  return (
    <div className="ListContainer">
      {toDos.length > 0
        ? toDos.map((toDo) => {
            return (
              <ToDo
                toDo={toDo}
                toggleState={toggleState}
                deleteToDo={deleteToDo}
                editToDo={editToDo}
                key={toDo.id}
              >
                {toDo.text}
              </ToDo>
            );
          })
        : "There are no tasks to show!"}
    </div>
  );
}
