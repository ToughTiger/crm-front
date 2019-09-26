import React from 'react';
import Navbar from './components/header/header';
import {Route, Switch} from 'react-router';
import LoginPage from './containers/auth/loginPage';
import SignupPage from './containers/auth/signupPage';
import Index from './components/index/index';
import dotenv from 'dotenv';

dotenv.config();

const App = ()=> {

  return (
      <div>
      <Navbar />
      <Switch>
         <Route exact path="/" component={Index}/>    
         <Route exact path="/login" component={LoginPage}/>
         <Route exact path="/signup" component={SignupPage}/>
      </Switch>
      </div>
     );
  }
  
export default (App);
