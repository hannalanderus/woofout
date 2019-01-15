import React, { Component } from 'react';
import firebase from './config/Fire';
//import Header from './Header';
import '../resources/scss/style.scss';


class Registration extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
    }
  }

  signup(e) {
    e.preventDefault();
    var db = firebase.firestore();

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      var user = firebase.auth().currentUser;
      console.log(user);
      db.collection("users").doc(user.uid).set({
        name: this.state.name,
        surname: this.state.surname,
      })
      user.sendEmailVerification().then(function () {
        console.log("verification email sent");
      }).then(function () {
        alert("Document successfully written!");
        window.location.href = "/RegistrationDog";
      }).catch(function (error) {
        alert(error);
      });
    })

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    return (
      <div className="App-registration blue-gradient">
        <section className="RegistrationPage">
          <div className="RegistrationPage-wrapper">
            <span className="logoSpan">Woofout</span>
            <div className="RegistrationPage-title">
              <h1>Registrering</h1><br />
              <h2>Användare</h2>
            </div>
            <div className="RegistrationPage-form">
              <input value={this.state.name} onChange={this.handleChange} type="name" name="name" id="name" placeholder="Förnamn" required></input>
              <input value={this.state.surname} onChange={this.handleChange} type="surname" name="surname" id="surname" placeholder="Efternamn" required></input>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="email" placeholder="Mailadress" required></input>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password" placeholder="Lösenord" required></input>
            </div>
            <button onClick={this.signup} className="button" id="signUp">KLART</button>
          </div>
        </section>
      </div >
    );
  }
}


export default Registration;

