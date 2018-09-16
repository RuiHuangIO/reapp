import React from "react";
import logo from "../logo.svg";

// building components as classes
export class Header extends React.Component {
  render() {
    // this.props returns all the properties
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{JSON.stringify(this.props.myObj)}</div>
        <div>{this.props.myArr[0]}</div>
        <div>{this.props.myFunc(10, 12)}</div>
        <div>{this.props.myFunc2(1, 1.2)}</div>
        <div>{this.props.myFunc3(2, 2.2)}</div>
      </header>
    );
  }
}
