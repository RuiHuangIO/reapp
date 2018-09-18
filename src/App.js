import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import { Header } from "./components/Header";

class App extends Component {
  state = {
    visible: true,
    whichComponentToShow: "ImageSlider"
  };
  render() {
    // using if statement to hide
    // used for totally transition
    // if (!this.state.visible) {
    //   return <div>Hidden</div>;
    // }
    if (this.state.whichComponentToShow === "ImageSlider") {
      return (
        <div className="App">
          <ImageSlider />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Counter" });
            }}
          >
            Show Counter
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Counter") {
      return (
        <div className="App">
          <div className={this.state.visible ? "visible" : "hidden"}>
            <Counter />
          </div>
          <button
            onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}
          >
            Toggle counter
          </button>
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Header" });
            }}
          >
            Show Header
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Header") {
      return (
        <div className="App">
          <Header />
        </div>
      );
    }
    return null;
  }
}

export default App;
