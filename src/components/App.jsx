import React from 'react';
import Body from './Body';
import Footer from './Footer';
import ModelX from './ModelX';
import ModelS from './ModelS';
import Model3 from './Model3';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import mountain from './../assets/images/mountain.jpg'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Source Sans Pro:200', 'sans-serif']
  }
});
function App() {
  return (
    <div>
      <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: sans-serif;
            width: 100%;
            fontFamily: 'google'
          }
          `}</style>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/modelX' component={ModelX} />
        <Route path='/modelS' component={ModelS} />
        <Route path='/model3' component={Model3} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
