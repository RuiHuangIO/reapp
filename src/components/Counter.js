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

  state = {
    count: 0,
    visible: true
  };
  componentWillUnmount() {
    console.log("unmounting...");
  }

  componentDidMount() {
    console.log("mounting...");
  }

  incrementHandler = () => {
    // lambda function binds the state
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementHandler = () => {
    // lambda function binds the state
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count} </div>
        <button onClick={this.incrementHandler}>increment</button>
        <button onClick={this.decrementHandler}>decrement</button>
      </div>
    );
  }
}
