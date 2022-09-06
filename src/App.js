import React, { Component } from 'react';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="h-full flex justify-end py-10">
        <span className="text-4xl">Calculator</span>
        <Calculator />
      </div>
    );
  }
}

export default App;
