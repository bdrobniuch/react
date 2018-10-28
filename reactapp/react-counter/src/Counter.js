import React, { Component } from 'react';
import Display from "./components/Display";
import Buttons from "./components/Buttons"

class Counter extends Component {

constructor(props) {
    super(props);
    this.state = {
        initValue : parseInt(this.props.initValue)
    };
}

incrementCounter = () => {
    console.log("test klik");
    //this.setState({initValue: this.state.initValue +1});
    this.setState((prevState) => {
        return ({initValue: prevState.initValue +1})
    });
}

  render() {
      //console.log(this.props);
      console.log(this.state);
    return (
        //let count = 10;
      <div className="counter-holder">
        
           <Display counterValue={this.state.initValue} textValue = {this.props.textValue} />
           <button onClick = {this.incrementCounter}>Dodaj jeden</button>
      </div>
    );
  }
}

export default Counter;
