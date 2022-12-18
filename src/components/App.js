import React, { Component, useState } from "react";
import "../styles/App.css";

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <div id="main">
      {
        /* Do not remove this main div!! */
        display === false ? null : (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )
      }

      <button
        id="click"
        onClick={() => {
          setDisplay(true);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default App;
