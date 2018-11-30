import React, { Component } from 'react';
import fire from './config/Fire';
import '../resources/scss/style.scss';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut().then((u) => {
      window.location.href = "/";
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div id="headerWrapper">
          <a href="/"><div className="logo"><h1>WOFFOUT</h1></div></a>
          <h2>PROFIL</h2>
        </div>
        <header className="App-header">
          <button onClick={this.logout} className="button" id="logout">Log out</button>

        </header>
      </div>
    );
  }
}


export default Profile;
