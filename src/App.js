import React from "react";
import "./App.css";

//importing components
import HomePage from "./Components/HomePage";
import QueryResult from "./Components/QueryResult";

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <QueryResult></QueryResult>
    </div>
  );
}

export default App;
