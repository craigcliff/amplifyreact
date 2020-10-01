import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App() {
  return (
      <main>
        <header>
       
        <h1>We now have Auth!</h1>
      </header>
        <Navbar />
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
          </Switch>
          <AmplifySignOut />
      </main>
  )
}

export default withAuthenticator(App);