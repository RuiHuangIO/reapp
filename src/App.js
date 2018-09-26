import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

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
        <TodoList />
      </div>
    );
  }
}

export default App;
