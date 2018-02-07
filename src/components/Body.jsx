import React from "react";
import Header from "./Header";


function Body(props){
  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',

  }
  return (
    <div>
      <Header />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jWreyC2l-dw?rel=0&amp;controls=0&amp;showinfo=0&loop=1&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  );
}

export default Body;
