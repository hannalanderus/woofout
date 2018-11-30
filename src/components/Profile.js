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
      user: '',
    };
  }
  logout() {
    firebase.auth().signOut().then((u) => {
      window.location.href = "/";
    }).catch((error) => {
      console.log(error);
    });
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


  componentDidMount() {
    this.authListener();
    var current = firebase.auth().currentUser;
    const database = firebase.firestore().collection("users");
    database.onSnapshot(this.getCollection);

  }

  getCollection = (querySnapshot) => {
    console.log(this.state.user);
    const data = [];
    querySnapshot.forEach((doc) => {
      const { name, surname } = doc.data();
      data.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        surname
      });
    });
    this.setState({
      data
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
