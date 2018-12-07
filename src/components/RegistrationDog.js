import React, { Component } from 'react';
import firebase from './config/Fire';
import Header from './Header';
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
      <div className="App-registration-dog blue-gradient">
        < Header />
        <section className="RegistrationPage">
          <div className="RegistrationPage-wrapper">
            <div className="RegistrationPage-form">
              <h1>Registrering</h1>
              <h2>Hund</h2>
          <input value={this.state.name} onChange={this.handleChange} type="name" name="name" id="name" placeholder="namn"></input>
          <input value={this.state.breed} onChange={this.handleChange} type="text" name="breed" id="breed" placeholder="Ras"></input>
          <input value={this.state.size} onChange={this.handleChange} type="text" name="size" id="size" placeholder="Storlek"></input>
          <input value={this.state.weight} onChange={this.handleChange} type="text" name="weight" id="weight" placeholder="Vikt"></input>
          < ImageUpload />
          <button onClick={this.signup} className="greyButton" id="signUp">KLAR</button>
          <button onClick={this.newDog} className="greyButton" id="newDog">Lägg till ny hund</button>
            </div>
          </div>
        </section>
      </div >
    );
  }
}


export default RegistrationDog;