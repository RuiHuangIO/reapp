import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  //use async await
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  //no need to fetch in render
  render() {
    // an alternative way of doing this
    // if (this.state.loading) {
    //   return <div>loading...</div>;
    // }
    // if (!this.state.person) {
    //   return <div>person not found</div>;
    // }
    // return (
    //   info
    // )
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>{this.state.person.name.title}</div>
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
            <img src={this.state.person.picture.large} alt="Profile Pic" />
          </div>
        )}
      </div>
    );
  }
}
