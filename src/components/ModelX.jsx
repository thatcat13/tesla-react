import React from 'react';
import logo from './../assets/images/logo.png';
import dontPanic from './../assets/images/dont-panic.jpg';
import { Link } from 'react-router-dom';

function ModelX(){
  const panicStyle = {
    width: 100
  };
  return (
    <div>
      <img style={panicStyle} src={dontPanic}/>
    </div>
  );
}

export default ModelX;
