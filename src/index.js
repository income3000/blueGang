import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './About';
import App from './App';
ReactDOM.render(
    <BrowserRouter>
       
       <Switch>
              <Route exact path="/" component={App}/>
              <Route exact path="/About" component={About}/>
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);


