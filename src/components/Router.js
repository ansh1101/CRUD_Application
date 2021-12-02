import React from "react";
import Create from "./dbSubComponents/Create";
import Delete from "./dbSubComponents/Delete";
import Read from "./dbSubComponents/Read";
import Update from "./dbSubComponents/Update";
import Selection, { clicked } from "./dbSubComponents/Selection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./Calculator";
import Currency from "./Currency";
import  DBManagement  from "./DBManagement";


export default function DBmodification() {

  return (
    <Router>
      <h1 className="dbheading">Applications </h1>
      <Selection />
      <div className="db-container">
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/currencyConverter" element={<Currency />} />
          <Route path="/dBManagement" element={<DBManagement />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/read" element={<Read />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}
