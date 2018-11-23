import React, { Component } from 'react';
import '../resources/scss/style.scss';
import StartPage from './StartPage';
import Registration from './Registration';
import Profile from './Profile';
import HamburgerMenu from './HamburgerMenu'
import WorkoutBank from './WorkoutBank';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <HamburgerMenu />
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={StartPage} exact />
              <Route path="/Registration" component={Registration} />
              <Route path="/Profile" component={Profile} />
              <Route path="/WorkoutBank" component={WorkoutBank} />


            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;