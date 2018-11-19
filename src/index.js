import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
let defaultTestColor = "#fff";
let alternateColor = "white";
let defaultStyle = {
  color: defaultTestColor,
  background: "black"
};

class Test extends Component {
  render() {
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2 style={defaultStyle}>Another title</h2>
      </div>
    );
  }
}

class Icon extends Component {
  render() {
    return (
      <div style={{ color: alternateColor, fontWeight: "900" }}>
        <img />
        <input type="text" style={{ background: "#fffd" }} />
        Go!
      </div>
    );
  }
}
class Build extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "25%" }}>
        <img />
        <h3>Build name</h3>
        <ul>
          <li>slot1</li>
          <li>slot2</li>
          <li>slot3</li>
          <li>slot4</li>
          <li>slot5</li>
          <li>slot6</li>
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <h1>
        <Test />
      </h1>
      <Icon />
      <Build />
      <Build />
      <Build />
      <Build />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
