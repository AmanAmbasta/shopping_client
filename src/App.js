import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components Import 

import Home from './component/home';
import Heading from './component/HeaderElement/Heading';
import Login from './component/user/loginpage';
import Register from './component/user/register'
import ProductAddNew from './component/shop/AddNew';
import ShowAll from './component/shop/ShowAll';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Heading />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/product/add' component={ProductAddNew} />
          <Route exact path='/product/show' component={ShowAll} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;