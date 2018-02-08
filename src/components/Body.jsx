import React from "react";
import Nav from './Nav';
import Header from "./Header";


function Body(props){
  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const heroVid = {
    position: 'fixed',
    zIndex: '-2',
    height: '100%'

  }
  return (
    <div style={bodyStyle}>
      <Nav />
      <Header />
        <video controls="" autoplay="" name="media" loop style={heroVid}><source src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.mp4?20170808" type="video/mp4" /></video>
    </div>
  );
}

export default Body;
