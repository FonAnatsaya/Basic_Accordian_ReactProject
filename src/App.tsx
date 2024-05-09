import React from "react";
import "./App.css";
import Accordian from "./Accordian";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <Accordian data={data} />
    </div>
  );
}

export default App;
