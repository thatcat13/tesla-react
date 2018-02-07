import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function Nav(){
  const divStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'space-around'
  };
  const linkStyles = {
    textDecoration: 'none',
    color: 'black',
    padding: 10
  };

  return (
    <div>
      <div>
        <Link to="/"><Logo /></Link>
      </div>
      <div style={divStyles}>
        <Link to="/" style={linkStyles}>MODEL S</Link>
        <Link to="/modelX" style={linkStyles}>MODEL X</Link>
        <Link to="/" style={linkStyles}>MODEL 3</Link>
        <Link to="/" style={linkStyles}>ROADSTER</Link>
        <Link to="/" style={linkStyles}>ENERGY</Link>
        <Link to="/" style={linkStyles}>SHOP</Link>
        <Link to="/" style={linkStyles}>SIGN IN</Link>
      </div>
    </div>
  );
}

export default Nav;
