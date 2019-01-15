import React, { Component } from 'react';
import firebase from './config/Fire';
import Menu from './Menu';
//import Header from './Header';

import ImageUpload from './ImageUpload';
import '../resources/scss/style.scss';

class RegistrationDog extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.newDog = this.newDog.bind(this);
    this.state = {
      name: '',
      breed: '',
      size: '',
      weight: '',
    }
  }

  signup(e) {
    e.preventDefault();
    var db = firebase.firestore();
    var userdog = firebase.auth().currentUser;
    db.collection("dog").add({
      name: this.state.name,
      breed: this.state.breed,
      size: this.state.size,
      weight: this.state.weight,
      userID: userdog.uid,
    }).then(function () {
      alert("Document successfully written!");
      window.location.href = "/Profile";
    }).catch(function (error) {
      alert("Got an error", error);
    });
  }
  newDog(e) {
    e.preventDefault();
    var db = firebase.firestore();
    var userdog = firebase.auth().currentUser;
    db.collection("dog").add({
      name: this.state.name,
      breed: this.state.breed,
      size: this.state.size,
      weight: this.state.weight,
      userID: userdog.uid,
    }).then(function () {
      alert("Document successfully written!");
      window.location.href = "/RegistrationDog";
    }).catch(function (error) {
      alert("Got an error", error);
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App-registration-dog orange-gradient">
        <section className="RegistrationDogPage">
          <div className="RegistrationDogPage-wrapper">
            <span className="logoSpan">Woofout</span>
            <div className="RegistrationDogPage-title">
              <h1>Registrering</h1><br />
              <h2>Hund</h2>
            </div>
            <div className="RegistrationDogPage-form">
              <input value={this.state.name} onChange={this.handleChange} type="name" name="name" id="name" placeholder="Namn" required></input>
              <input value={this.state.breed} onChange={this.handleChange} type="text" name="breed" id="breed" placeholder="Ras" required></input>
              <input value={this.state.size} onChange={this.handleChange} type="text" name="size" id="size" placeholder="Storlek" required></input>
              <input value={this.state.weight} onChange={this.handleChange} type="text" name="weight" id="weight" placeholder="Vikt" required></input>
            </div>
            <button onClick={this.newDog} className="button" id="newDog"></button>
            <div className="gdpr-wrapper">
              <input type="checkbox" className="checkbox"></input><span className="checkmark"></span><p className="gdpr-text"> Jag godkänner användarvillkoren och
                att Woofout behandlar mina personuppgifter enligt integritetspolicyn</p>
            </div>
            <button onClick={this.signup} className="button" id="signUpDog">KLART</button>
          </div>
        </section>
        <Menu />
      </div >
    );
  }
}


export default RegistrationDog;