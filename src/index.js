import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
/*const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return <div>Welcome to code!!</div>;
};*/

/*class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMassage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMassage: err.message });
      }
    );
  }*/

class App extends React.Component {
  state = { lat: null, errorMassage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMassage: err.message })
    );
  }
  render() {
    /*  return (
      <div>
        Latitude: {this.state.lat}
        <br />
        errorMassage: {this.state.errorMassage}
      </div>
    );
  }*/
    if (!this.state.errorMassage && this.state.lat) {
      //return <div> Latitude:{this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat}/>
    }
    if (this.state.errorMassage && !this.state.lat) {
      return <div> errorMassage:{this.state.errorMassage}</div>;
    }
    return <Spinner message= "wait for location..." />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
