import React, { Component } from 'react';

const Display = (props) => {
  return (<div className="display"><p>{props.textValue}: {props.counterValue}</p></div>)
}

export default Display;