import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class ValidationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      //same as 'emailError: emailError'  Javascript man
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    console.log(this.state);

    if (isValid) {
      //clear the form if the form is valid
      this.setState(initialState);
      console.log(this.state);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      //pressing 'enter' will submit the form
    );
  }
}
