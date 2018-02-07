import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <style jsx global>{`
          body {
            font-family: sans-serif;
            width: 100%;
          }
          `}</style>
      <Nav />
      <Header />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jWreyC2l-dw?rel=0&amp;controls=0&amp;showinfo=0&loop=1&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <Footer />
    </div>
  );
}
export default App;
