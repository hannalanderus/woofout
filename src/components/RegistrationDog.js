import React, { Component } from 'react';
import fire from './config/Fire';
import '../resources/scss/style.scss';

class RegistrationDog extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
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
          <a href="/"><div class="logo"><h1>WOFFOUT</h1></div></a>
          <h2>REGISTRERA DIN HUND</h2>
        </div>
        <header className="App-header-registrationdog">
          <div className="inputWrapper">
            <input placeholder="Namn"></input>
            <input placeholder="Ras"></input>
            <input placeholder="Storlek"></input>
            <input placeholder="Vikt"></input>
            <input placeholder="Ålder"></input>
            <input placeholder="Ladd upp bild"></input>
            <button onClick={this.signup} className="button" id="signUp">Registrera</button>
          </div>
        </header>
      </div>
    );
  }
}


export default RegistrationDog;