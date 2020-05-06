import React, { Component } from "react";
import { Home } from "./components";
import { getTest } from "./actions/testAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    getTest().then((res) => {
      this.setState({ apiResponse: res.data });
    });
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <Home />
        {/* <p className="App-intro">{this.state.apiResponse}</p> */}
      </div>
    );
  }
}

export default App;
