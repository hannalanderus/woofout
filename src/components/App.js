import React, { Component } from 'react';
import '../resources/scss/style.scss';
import StartPage from './StartPage';
import Registration from './Registration';
import RegistrationDog from './RegistrationDog';
import Profile from './Profile';
import HamburgerMenu from './HamburgerMenu'
import WorkoutBank from './WorkoutBank';
import fire from './config/Fire';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }



  render() {

    return (
      <div>
        {this.state.user ? (<Profile />) : (< StartPage />)}
        <HamburgerMenu />
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={StartPage} exact />
              <Route path="/Registration" component={Registration} />
              <Route path="/Profile" component={Profile} />
              <Route path="/WorkoutBank" component={WorkoutBank} />
              <Route path="/RegistrationDog" component={RegistrationDog} />
            </Switch>
          </div>
        </BrowserRouter >
      </div >
    );
  }
}

export default App;