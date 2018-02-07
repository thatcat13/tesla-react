import React from 'react';
import logo from './../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Logo(){

  const logoStyle = {
    width: 100
  };
  return (
    <div>
      <img style={logoStyle} src={logo}/>
    </div>
  );
}

export default Logo;
