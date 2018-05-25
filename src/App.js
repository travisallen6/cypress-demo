import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  login() {
    alert('yay, you logged in')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <input type="text" id="username"/> <br />
        <input type="text" id="password"/><br />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default App;
