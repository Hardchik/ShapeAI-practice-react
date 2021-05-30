var React = require("react");
//import React from "react";
var ReactDOM = require("react-dom");
//import ReactDOM from "react-dom";

var fname = prompt("What's your first name");
var lname = prompt("What's your last name");

ReactDOM.render(
  <h1>Hello {fname + " " + lname}</h1> ,document.getElementById('root')
);

//we can only use a single tag i.e. below the <h1>, <h2> and <h3> tags are enclosed in one <div> tag
ReactDOM.render(
  <div>
  <h1>Hello {fname + " " + lname}</h1> 
  <h2>Hello {fname} {lname}</h2> 
  <h3>Hello {`${fname} ${lname}`}</h3> 
  </div> ,
  document.getElementById('root')
);