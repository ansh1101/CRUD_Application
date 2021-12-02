import React from "react";
import { Link } from "react-router-dom";


const Selection = () => {


    
  return (
    <div id="selection">
      <div className="link">
        <h2>Choose a Application :</h2>
        <ul>
          <li className="links">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="links">
            <Link to="/currencyConverter">Currency</Link>
          </li>
          <li  id='databaseSystem' className="links">
            <Link to="/dBManagement">DataBase Management</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Selection;
