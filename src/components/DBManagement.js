import React from "react";
import DBSelection from "./dbSubComponents/DBSelection";

const DBManagement = () => {
  return (
    <div>
      <h1 className="dbheading">Database Management </h1>
      <div className="db-container">
          <DBSelection />
          
      </div>
    </div>
  );
};

export default DBManagement;
