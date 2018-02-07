import React from 'react';
import { Link } from 'react-router-dom';

function HomeButton(){
  const buttonDivStyles = {
    display: 'flex',
  }
  const buttonStyles = {
    backgroundColor: 'rgba(107, 107, 107, 0.24)',
    width: 130,
    height: 40,
    margin: 10,
    textAlign: 'center',
    fontSize: '0.85em',
    fontWeight: 'bold'
  }

  return (
    <div style={buttonDivStyles}>
      <button style={buttonStyles}>ORDER YOURS</button>
      <button style={buttonStyles}>NEW INVENTORY</button>
      <button style={buttonStyles}>USED INVENTORY</button>
      <button style={buttonStyles}>TEST DRIVE</button>
    </div>
  );
}

export default HomeButton;
