import React, { Component } from 'react';
import firebase from './config/Fire.js';
import Menu from './Menu';
import Filter from './Filter';
import '../resources/scss/style.scss';




class Workoutbank extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  componentDidMount() {
    const database = firebase.firestore().collection('trainingprogram');
    database.onSnapshot(this.getCollection);

  }

  getCollection = (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      const { name, category, purpose, description, material } = doc.data();
      data.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        category,
        material,
        purpose,
        description
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
          <h2>ÖVNINGSBANK</h2>
          <Filter />
          <Menu />
        </div>
      </section>
    );
  }
}


export default Workoutbank;