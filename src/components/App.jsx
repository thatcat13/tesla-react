import React from 'react';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';
import ModelX from './ModelX';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

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
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/modelX' component={ModelX} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
