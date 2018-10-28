import React, { Component } from 'react';
import './App.css';

//import Buttons from './components/Buttons';
import Counter from './Counter';
//import SecondaryHeading from './components/SecondaryHeading';

class App extends Component {
  render() {
    return (
      <div className="counter">
        <header><h1>
          Licznik w ReactJS
        </h1>
        <Counter textValue="Stan licznika" initValue="30"/>
        </header>
      </div>
    );
  }
}

export default App;
