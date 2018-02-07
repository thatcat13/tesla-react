import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Header(){
 const headerStyles = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center'
 }

  return (
    <div style={headerStyles}>
      <h1>Quickest Acceleration.</h1>
      <h1>Longest Range. The Safest Cars Ever.</h1>
      <Button />
    </div>
  );
}

export default Header;
