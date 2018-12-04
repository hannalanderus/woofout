import React, { Component } from 'react';
import firebase from './config/Fire';
import fire from './config/Fire';
import '../resources/scss/style.scss';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      data: [],

    };
  }

  logout() {
    firebase.auth().signOut().then((u) => {
      window.location.href = "/";
    }).catch((error) => {
      console.log(error);
    });
  }


  componentDidMount() {
    // this.authListener();
    var current = firebase.auth().currentUser;
    const database = fire.firestore().collection("users").doc("0C6jIHvMXkgI4P2MhaMXswnApaz1");
  
    database.get().then((doc) => {
      let profilData = doc.data();
      console.log(profilData);
      this.setState({ data: profilData });
    })
      .catch(function (error) {
        console.log(error);
      })
         
  }

  authListener (){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user.uid);
      if (user) {
        this.setState({ user: user.uid });
        console.log('inloggad');
      } else {
        console.log('ej loggad');
      }
    });

  }

  render() {

    return (
      <div className ="App">
      <div id="headerWrapper">
          <h1>PROFIL</h1>
      </div>
         <section className="workoutPage">
        <div className="workoutPage-wrapper">
          <h1>{this.state.data.name}</h1>
          <h1>{this.state.data.surname}</h1>
        </div>
      </section>
    </div>
    );
  }
}


export default Profile;
