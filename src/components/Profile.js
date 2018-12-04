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
     this.authListener();
    var current = firebase.auth().currentUser;
    const database = fire.firestore().collection("users").doc("0C6jIHvMXkgI4P2MhaMXswnApaz1");
    database.get().then(function (doc) {
      let profilData = doc.data();
      console.log(profilData);

    })
      .catch(function (error) {
        console.log(error);
      })
    this.setState({
      data: profilData
    })

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
         <section className="workoutPage">
        <div className="workoutPage-wrapper">
          <h2>PROFIL</h2>
          {this.state.data.map(each =>
            <ul className="workoutPage-list" key={each.id}>
              <li>{each.name}</li>
              <li>{each.surname}</li>
            </ul>
          )}
        </div>
      </section>
    );
  }
}


export default Profile;
