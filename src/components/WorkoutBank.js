import React, { Component } from 'react';
import firebase from './config/Fire.js';
import '../resources/scss/style.scss';




class Workoutbank extends Component {
  state = {
    data: null,
  };


  componentDidMount() {
    var db = firebase.firestore();
    // Disable deprecated features
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("trainingprogram").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        this.setState({ data: data });
        console.log(doc.data().name);
        // console.log(doc.data().type);
        console.log(data);
      });

    });
  }

  render() {

    return (
      <div className="App">
        <div id="headerWrapper-workout">
          <a href="/"><div className="logo"><h1>WOFFOUT</h1></div></a>
          <h2>ÖVNINGSBANK</h2>


        </div>
        <header className="App-header-workout">
        </header>

      </div>
    );
  }
}


export default Workoutbank;