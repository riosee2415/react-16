import React, { Component, Fragment } from "react";

class ReturnTypes extends Component {
  render() {
    return (
      <Fragment>
        <div>Fragment : div-1</div>
        <div>Fragment : div-2</div>
      </Fragment>
    );
  }
}

class ReturnTypesString extends Component {
  render() {
    return "Just String";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <ReturnTypesString />
      </Fragment>
    );
  }
}

export default App;
