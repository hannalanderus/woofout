import React, { Component } from 'react';
import '../resources/scss/style.scss';
import StartPage from './StartPage';
import Registration from './Registration';
import RegistrationDog from './RegistrationDog';
import Profile from './Profile';
import ProfileDog from './ProfileDog';
import WorkoutBank from './WorkoutBank';
import ImageUploadProfile from './ImageUploadProfile';
import ImageUpload from './ImageUpload';
import ResetPassword from './ResetPassword';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {


  render() {

    return (
      <div>
        <span className="logoSpan">Woofout</span>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={StartPage} exact />
            <Route path="/Registration" component={Registration} />
            <Route path="/Profile" component={Profile} />
            <Route path="/WorkoutBank" component={WorkoutBank} />
            <Route path="/RegistrationDog" component={RegistrationDog} />
            <Route path="/ProfileDog" component={ProfileDog} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route path="/ImageUploadProfile" component={ImageUploadProfile} />
            <Route path="/ImageUpload" component={ImageUpload} />

          </Switch>
        </BrowserRouter >
      </div >
    );
  }
}

export default App;