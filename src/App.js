import React, { Component } from "react";
import "./App.css";
import Lottery from "./Lottery";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Lottery /> the default prop is maxNum 40 and numBall 6 */}
        <Lottery />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
      </div>
    );
  }
}

export default App;
