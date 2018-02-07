import React from 'react';
import logo from './../assets/images/logo.png';

function Logo(){

  console.log(logo);
  return (
    <div>
      <img src={logo}></img>
    </div>
  );
}



export default Logo;
