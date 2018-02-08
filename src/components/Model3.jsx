import React from 'react';
import Nav from './Nav';
import logo from './../assets/images/logo.png';
import ModelXButton from './ModelXButton';
import { Link } from 'react-router-dom';

function Model3(){
  const model3Div = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const model3Style = {
    width: '50%',
    margin: '0 auto',
    objectFit: 'cover'
  };
  return (
    <div style={model3Div}>
      <div style={{backgroundColor: 'black', width: '100%'}}>
        <Nav />
      </div>
      <video controls="" autoplay="" name="media" loop style={{width: '100%'}}><source src="https://www.tesla.com/ns_videos/Model3_WebsiteHero_Master_D.mp4?20170801" type="video/mp4" /></video>

      <h1 style ={{padding: 20}}>Meet Model 3</h1>
      <p style={{paddingLeft: 20, paddingRight: 20, marginLeft: 30, marginRight: 30, marginBottom: 30, textAlign: 'justify', lineHeight: 1.5}}>Designed to attain the highest safety ratings in every category, Model 3 achieves 220 miles of range while starting at only $35,000 before incentives.</p>
      <ModelXButton />
      <hr/>
    </div>
  );
}

export default Model3;
