import React from 'react';

import './App.css';

import { useState } from "react";
import "./App.css";
import Callback from "./Callback";



function App() {
  const [UIColor, setUIColor] = useState(null);
  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <div className = "app-header">
      <div
        className="App_color_container"
        style={{ background: `${UIColor}` }}
      ></div>
      <br/>
      <Callback getColor={getColor} />
    </div>
  );
}


export default App;
