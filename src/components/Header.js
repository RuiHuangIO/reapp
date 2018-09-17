import React from "react";
import logo from "../logo.svg";

// building components as classes
export class Header extends React.Component {
  render() {
    // this.props returns all the properties
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}
