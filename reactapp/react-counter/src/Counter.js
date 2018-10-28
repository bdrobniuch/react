import React, { Component } from 'react';
import Display from "./components/Display";
import Buttons from "./components/Buttons"
import Level from './components/Level';
import Winner from './components/Winner';

class Counter extends Component {

constructor(props) {
    super(props);
    this.state = {
        initValue : parseInt(this.props.initValue),
        bestResults : [["Adam", 20], ["Janek", 16], ["Łukasz", 30]]
    };
}

incrementCounter = (resetState) => {

    console.log(resetState);
    //this.setState({initValue: this.state.initValue +1});
    if (resetState)
    {
        this.setState((prevState) => {
            return ({initValue: 0})
        });   
    } else
     {
        this.setState((prevState) => {
            return ({initValue: prevState.initValue +1})
        });
     }

}

  render() {

    

      //console.log(this.props);
      console.log(this.state);
    return (
        //let count = 10;
      <div className="counter-holder">
        
           <Display counterValue={this.state.initValue} textValue = {this.props.textValue} />
           <Level level = {parseInt(this.state.initValue/10)} />
           
           { parseInt(this.state.initValue/10)>2  &&  <Winner isWinner = {parseInt(this.state.initValue/10)>2}/>}
           <Buttons update={this.incrementCounter}/>
           <ul>
           {this.state.bestResults.map((e,i)=> {
               return <li  key={i}>{e[0] + " ma "+e[1]}</li>;
           })}
            </ul>
      </div>
    );
  }
}

export default Counter;
