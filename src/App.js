import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Body, { Body2 } from "./components/Body";

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
    const add = (a, b) => a + b;
    return (
      <div className="App">
        <Header
          title="Hello"
          num={5}
          myArr={[1, 2, 3]}
          myObj={{
            a: 5,
            b: 6
          }}
          myFunc={add}
          myFunc2={(a, b) => a + b}
          myFunc3={this.add}
        />
        {/* only strings can ignore the {} */}
        <Body2 />
        <Body text="hello there" myFunc={add} />
        <Body text="hello there g" myFunc={add} />
      </div>
    );
  }
}

export default App;
