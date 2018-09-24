import React from "react";

// function components cannot have states while class components can
export default class Counter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0
  //   };
  // }
  // since we are not using constructor for anything besides initializing this.state

  render() {
    return (
      // when lifting up states, pass in props
      <div>
        <div>count: {this.props.count}</div>
        <button onClick={this.props.decrementHandler}>decrement</button>
        <button onClick={this.props.incrementHandler}>increment</button>
      </div>
    );
  }
}
