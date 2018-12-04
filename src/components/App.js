import React, { Component } from 'react';
import '../resources/scss/style.scss';
import StartPage from './StartPage';
import Registration from './Registration';
import RegistrationDog from './RegistrationDog';
import Profile from './Profile';
import ProfileDog from './ProfileDog';
import HamburgerMenu from './HamburgerMenu'
import WorkoutBank from './WorkoutBank';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {


  render() {

    return (
      <div>
        <HamburgerMenu />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={StartPage} exact />
            <Route path="/Registration" component={Registration} />
            <Route path="/Profile" component={Profile} />
            <Route path="/WorkoutBank" component={WorkoutBank} />
            <Route path="/RegistrationDog" component={RegistrationDog} />
            <Route path="/ProfileDog" component={ProfileDog} />
          </Switch>
        </BrowserRouter >
      </div >
    );
  }
}

export default App;