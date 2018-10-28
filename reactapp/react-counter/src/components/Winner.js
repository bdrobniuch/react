import React, { Component } from 'react';

const Winner = (props) => {
  console.log("isWinner", props.isWinner);
  return   <div className="winner"><p>Wygrałeś!!!</p></div>;
}

export default Winner;
// return  (props.isWinner)? (<div className="winner"><p>Wygrałeś!!!</p></div>) : (<div></div>);