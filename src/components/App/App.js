import React, { Component } from 'react';
import './stylesheet/App.css';
import Navigation from '../Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
