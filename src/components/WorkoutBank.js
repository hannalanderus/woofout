import React, { Component } from 'react';
import firebase from './config/Fire.js';
import '../resources/scss/style.scss';




class Workoutbank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      type: [],
      purpose: [],
      description: []
    };
  }

  componentDidMount() {
    var db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    const database = db.collection("trainingprogram");

    database.get().then((querySnapshot) => {
      querySnapshot.forEach((databaseCollection) => {
        // console.log(databaseCollection.id, " => ", databaseCollection.data());
        const data = databaseCollection.data();
        this.setState({ name: data.name });
        this.setState({ type: data.type });
        this.setState({ purpose: data.purpose });
        this.setState({ description: data.description });
        console.log(this.state);

      });

    });
  }

  render() {
    console.log(this.state.type);
    return (
      <div className="App">
        <div id="headerWrapper-workout">
          <a href="/"><div className="logo"><h1>WOFFOUT</h1></div></a>
          <h2>ÖVNINGSBANK</h2>
          <ul>
            <li>Typ:{this.state.type}</li>
            <li>Syfte:{this.state.purpose}</li>
            <li>Namn:{this.state.name}</li>
            <li>Utförande:{this.state.description}</li>
          </ul>
        </div>
        <header className="App-header-workout">
        </header>

      </div>
    );
  }
}


export default Workoutbank;