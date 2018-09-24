import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    count: 0
  };

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

  //by using lift up state, we can have two components with dynamically related states.
  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          decrementHandler={this.decrementHandler}
          incrementHandler={this.incrementHandler}
        />
        <Counter
          count={this.state.count - 1}
          decrementHandler={this.decrementHandler}
          incrementHandler={this.incrementHandler}
        />
      </div>
    );
  }
}

export default App;
