import React from "react";

export default class Form extends React.Component {
  state = {
    name: "hello",
    favoritePet: "hi",
    rememberMe: true,
    title: "Miss"
  };

  handleChange = event => {
    //use event parameter to get the input
    // console.log(event.target.value);

    this.setState({ name: event.target.value });
  };

  handleFavoritePetChange = event => {
    this.setState({ favoritePet: event.target.value });
  };

  handleCheckboxChange = event => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleSelect = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = () => {
    //submit a snapshot of the state
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {/* uncontrolled field (not storing the data being passed)*/}
        <input onChange={this.handleChange} value={this.state.name} />
        <textarea
          onChange={this.handleFavoritePetChange}
          value={this.state.favoritePet}
        />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheckboxChange}
        />
        <div>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Miss</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
