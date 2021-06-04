import React from 'react';
import Login from './login';
import Home from './home';
import Mymate from './mymate'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Mymate">
        <Mymate />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
