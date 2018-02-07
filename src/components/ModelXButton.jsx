import React from 'react';
import { Link } from 'react-router-dom';

function ModelXButton(){
  const modelXButtonStyles = {
    backgroundColor: 'rgba(107, 107, 107, 0.24)',
    width: 130,
    height: 40,
    margin: 10,
    textAlign: 'center',
    fontSize: '0.85em',
    fontWeight: 'bold'
  };

  return (
    <div>
      <button style={modelXButtonStyles}>CUSTOM ORDERS</button>
      <button style={modelXButtonStyles}>STAY UPDATED</button>
    </div>
  );
}

export default ModelXButton;
