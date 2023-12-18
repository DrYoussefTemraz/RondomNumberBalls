import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) }; //to generate an array with no of items equal the props
    this.handleClick = this.handleClick.bind(this); //binding
  }
  //call back function passed to the event handler, setting new state
  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} /> //props for the ball component
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
