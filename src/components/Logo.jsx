import React from 'react';
import logo from './../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Logo(){

  const logoStyle = {
    width: 100
  };
  return (
    <div>
      <Link to='/'><img style={logoStyle} src={logo}/></Link>
    </div>
  );
}

export default Logo;
