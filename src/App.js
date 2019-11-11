import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "lynn", "dal", "kneep"]
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };

  render() {
    const { friends } = this.state;
    return friends.map(friend => `${friend}_map___`);
  }
}

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

const ErrorFallback = () => "Sorry, something went wrong";

class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({
      hasError: true
    });
  };
  render() {
    const { hasError } = this.state;
    return (
      <Fragment>
        <ReturnTypes />
        <ReturnTypesString />
        <Portals />
        <br />
        {hasError ? <ErrorFallback /> : <ErrorMaker />}
      </Fragment>
    );
  }
}

export default App;
