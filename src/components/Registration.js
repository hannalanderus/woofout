import React, { Component } from 'react';
import fire from './config/Fire';
import '../resources/scss/style.scss';


class Registration extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      forename:'',
      surname:'',
      email: '',
      password: '',
    }
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
          <a href="/"><div className="logo"><h1>WOFFOUT</h1></div></a>
          <h2>REGISTRERING</h2>
        </div>
        <header className="App-header-registration">
          <div className="inputWrapper">
            <input value={this.state.forename} onChange={this.handleChange} type="forename" name="forename" id="forename" placeholder="Förnamn"></input>
            <input value={this.state.surname} onChange={this.handleChange} type="surname" name="surname" id="surname" placeholder="Efternamn"></input>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="email" placeholder="Email"></input>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password" placeholder="Lösenord"></input>
            <input placeholder="Konfirmera lösenord"></input>
            <button onClick={this.signup} className="button" id="signUp">Registrera</button>
          </div>
        </header>
      </div>
    );
  }
}


export default Registration;

