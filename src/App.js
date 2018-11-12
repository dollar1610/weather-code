import React, { Component } from 'react';
import WeatherPage from '../src/containers/WeatherPage/index';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherPage />
      </div>
    );
  }
}

export default App;
