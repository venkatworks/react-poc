import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './app-routes';

class App extends Component {
  render() {
    return (
      <div>
          <HashRouter>
            {AppRoutes}
          </HashRouter>
      </div>
    );
  }
}

export default App;
