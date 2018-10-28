import React, { Component } from 'react';

class Buttons extends Component {

    updateCounter = (resetState) =>
    {
console.log("qwertuy");
this.props.update(resetState);
    }

  render() {
    return (
        <div>

                    <button onClick={()=> this.updateCounter(false)}>Dodaj jeden</button>
        <button onClick={()=> this.updateCounter(true)}>Resetuj</button>
        </div>

    );
  }
}

export default Buttons;
