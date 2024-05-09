import React, { useState } from "react";
import "./App.css";
import Accordian from "./Accordian";
import { data } from "./data";
import { Data } from "./Accordian";

function App() {
  const [dataAccordians, setDataAccordians] = useState<Data[]>(data);
  return (
    <div className="App">
      <Accordian data={dataAccordians} setData={setDataAccordians} />
    </div>
  );
}

export default App;
