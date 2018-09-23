import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: []
  };

  //use async await
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  //no need to fetch in render

  render() {
    /* an alternative way of doing this
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.person) {
      return <div>person not found</div>;
    }
    return (
      info
    )
    */

    /*use forEach loop instead of map
    const peopleJsx = [];
    this.state.people.forEach(person => {
      peopleJsx.push(
        <div key={person.login.uuid}>
          <div>{person.name.title}</div>
          <div>{person.name.first}</div>
          <div>{person.name.last}</div>
          <img src={person.picture.large} alt="Profile Pic" />
        </div>
      );
    });
    */

    const peopleJsx = this.state.people.map(person => (
      /*give a unique key prop
      or do
      {this.state.people.map((person, i) =>(
        <div key={`some-person-${i}`}>
        ...
      ))}
      when a unique id is not available.
      This is a last resort as it might cause problem when deleting an array element
      Even using {person.name.last+person.name.first} can be good here
      */
      <div key={person.login.uuid}>
        <div>{person.name.title}</div>
        <div>{person.name.first}</div>
        <div>{person.name.last}</div>
        <img src={person.picture.large} alt="Profile Pic" />
      </div>
    ));

    return (
      <div>
        {this.state.loading || !this.state.people.length ? (
          <div>Loading...</div>
        ) : (
          <div>{peopleJsx}</div>
        )}
      </div>
    );
  }
}
