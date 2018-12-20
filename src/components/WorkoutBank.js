import React, { Component } from 'react';
import firebase from './config/Fire.js';
import Menu from './Menu';
import Filter from './Filter';
import '../resources/scss/style.scss';

class Workoutbank extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: 'Bajs'
    };
  }

  componentDidMount() {
    if (this.state.name === 'Rörlighet') {
      const current = this.state.name;
      const database = firebase.firestore().collection('trainingprogram').where("category", "==", current);
      database.onSnapshot(this.getCollection);
    } else {
      const database = firebase.firestore().collection('trainingprogram');
      database.onSnapshot(this.getCollection);
    }
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
      <div>

        <section className="workoutPage">
          <div className="workoutPage-wrapper">
            <h2>ÖVNINGSBANK</h2>
            <Filter name={this.state.name} />
            {this.state.data.map(each =>
              <ul className="workoutPage-list" key={each.id}>
                <li className="listName">{each.name}</li>
                <li className="listType">{each.category}</li>
                <li>Syfte:{each.purpose}</li>
                <li>Material:{each.material}</li>
                <li>Beskrivning: {each.description}</li>
              </ul>
            )}

          </div>
        </section >
        <Menu />
      </div>

    );
  }
}


export default Workoutbank;