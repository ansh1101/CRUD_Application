import React from "react";
import Calculator from "./components/Calculator";
import Currency from "./components/Currency";
import DBmodification from "./components/Router";


function App() {
  return (
    <div className="App">
      <DBmodification />
    </div>
  );
}

export default App;














// import React from "react";
// // import { Link } from "react-router-dom";
// // import Calculator from "./components/Calculator";
// // import Currency from "./components/Currency";
// import DBmodification from "./components/DBmodification";
// // import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//     <Router>

//       <div>
//         <ul>
//           <li className="calc_link">
//             <Link to="/calculator">Calculator</Link>
//           </li>
//           <li className="curr_link">
//             <Link to="/currencyConverter">Currency Converter</Link>
//           </li>
//           <li className="db_link">
//             <Link to="/dBManagement">DB Management</Link>
//           </li>
//         </ul>
//       </div>
    
//         <Routes>
//           <Route path="/calculator" element={<Calculator />} />
//           <Route path="/currencyConverter" element={<Currency />} />
//           <Route path="/dBManagement" element={<DBmodification />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
