import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Restaurantpage from './view/Restaurantpage';
import Home from './view/Home';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route path="/Restaurantpage" component={Restaurantpage} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
