import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just Touched It!";

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
        <Portals />
      </Fragment>
    );
  }
}

export default App;
