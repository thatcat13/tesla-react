import React from 'react';
import { Link } from 'react-router-dom';

function Button(){
 const buttonStyles = {
   backgroundColor: 'grey',
   width: 75,
   height: 50
 }

  return (
    <div>
      <button style={buttonStyles}>ORDER YOURS</button>
      <button style={buttonStyles}>NEW INVENTORY</button>
      <button style={buttonStyles}>USED INVENTORY</button>
      <button style={buttonStyles}>TEST DRIVE</button>
    </div>
  );
}

export default Button;
