import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="flex flex-col gap-4 relative">
        <NavBar />
        <Outlet />
      </div>
    );
  }
}

export default App;
