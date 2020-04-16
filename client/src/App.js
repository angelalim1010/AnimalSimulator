import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import { getTest } from "./actions/testAction";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
   getTest().then(res=>{
     this.setState({apiResponse: res.data})
   })
}

componentDidMount() {
    this.callAPI();
}
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="App-intro">{this.state.apiResponse}</p>

    </div>
  );
}
  
}

export default App;