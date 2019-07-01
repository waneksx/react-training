import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import ErrorPage from './components/ErrorPage/ErrorPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <NavLink
                to="/users"
                exact > Users </NavLink>
              <NavLink
                to="/courses"
                exact > Courses </NavLink>
            </nav>
          </header>
          <main>
            <Switch>
              <Route path="/users" component={Users} />
              <Route path="/courses" component={Courses} />
              <Redirect from="/all-courses" to="/courses" />
              <Route component={ErrorPage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
