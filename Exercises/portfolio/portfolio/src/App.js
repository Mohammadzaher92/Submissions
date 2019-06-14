import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Component/hompage'
import Aboutme from './Component/aboutme'
import myworks from './Component/myworks'
import Contactme from './Component/Contactme'


function App() {
  return (
  //  <div>
  //    <Home></Home>
  //  </div>
  <BrowserRouter>
    <div>
    <Route path="/" component={Home} exact />
    <Route path="/aboutme.html" component={Aboutme} />
    <Route path="/myworks.html" component={myworks} />
    <Route path="/Contactme.html" component={Contactme} />
    </div>
  </BrowserRouter>
  );
}

export default App;
