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
    //console.log(event.target.value);
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
    // use bracket to update the value
  };

  handleSubmit = event => {
    event.preventDefault();
    //submit a snapshot of the state
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* uncontrolled field (not storing the data being passed)*/}
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <textarea
          name="favoritePet"
          onChange={this.handleChange}
          value={this.state.favoritePet}
        />
        <input
          name="rememberMe"
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
          //no need for false to be passed in other ones because default is undefined which valuates to false
        />
        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Miss</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      //pressing 'enter' will submit the form
    );
  }
}
