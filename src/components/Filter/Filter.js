import React from "react";

import "./Filter.css";

import { TODO, DONE, ALL } from "../../utils/constants";

export default function Filter(props) {
  const { onFilter } = props;

  return (
    <ul className="Header">
      <li onClick={() => onFilter(ALL)} className="Header-item">
        All
      </li>
      <li onClick={() => onFilter(TODO)} className="Header-item">
        To do
      </li>
      <li onClick={() => onFilter(DONE)} className="Header-item">
        Done
      </li>
    </ul>
  );
}
