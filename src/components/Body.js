import React from "react";
//building components as functions
//can't use this.props for functional components
//props can be passed as first parameter

export default props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.myFunc(1, 2)}</p>
  </div>
);

export const Body2 = () => (
  <div>
    <div>Hi there</div>
  </div>
);
