
import React, { Component } from 'react';
import fire from './config/Fire';
// import HamburgerMenu from './HamburgerMenu'
import '../resources/scss/style.scss';

class StartPage extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
    }
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {

      })
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div id="headerWrapper">
          <h1>WOFFOUT</h1>
        </div>
        <header className="App-header">
          <div className="inputWrapper">
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="username" placeholder="Användarnamn"></input>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password" placeholder="Lösenord"></input>
            <button onClick={this.login} className="button" id="login">Log in</button>
            <button className="button" id="gotosignUp"><a href="/Registration">Går till Reg sida</a></button>
            <button onClick={this.signup} className="button" id="signUp">Test reg databas </button>
          </div>
        </header>
      </div>

    );
  }
}


export default StartPage;
