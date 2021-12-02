import React from "react";
import { Link } from "react-router-dom";

const DBSelection = () => {
 
  return (
    <div id="selection">
      <div className="link">
        <h2>Choose a operation :</h2>
        <ul>
          <li className="links">
            <Link to="/create">Create</Link>
          </li>
          <li className="links">
            <Link to="/read">Read</Link>
          </li>
          <li className="links">
            <Link to="/update">Update</Link>
          </li>
          <li className="links">
            <Link to="/delete">Delete</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DBSelection;
