import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

const BoundaryHOC = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    };
    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };
    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

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

const PErrorMaker = BoundaryHOC(ErrorMaker);

const PPortals = BoundaryHOC(Portals);

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

const ErrorFallback = () => "__Sorry, something went wrong__";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <ReturnTypesString />
        <PPortals />
        <PErrorMaker />
      </Fragment>
    );
  }
}

export default App;
