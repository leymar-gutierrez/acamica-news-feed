import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavApp from '../Nav'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import Search from '../Pages/Search'


class App extends React.Component {
  
  render () {
    return(
      <Router>
          <NavApp />
          <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/categoria/:category" exact component={Category}></Route>
              <Route path="/search/:query" exact component={Search}></Route>
          </Switch>
      </Router>
    )
  }
}

export default App
