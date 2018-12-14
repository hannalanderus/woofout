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
      name: " "
    };
  }


  // componentDidMount() {
  //   if (this.state.name) {
  //     const current = this.state.name;
  //     const database = firebase.firestore().collection('trainingprogram').where('category', '==', current);
  //     database.onSnapshot(this.getCollection);
  //   } else {
  //     const database = firebase.firestore().collection('trainingprogram');
  //     database.onSnapshot(this.getCollection);
  //   }
  // }

  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  //   console.log(this.state.name)
  // }

  // getCollection = (querySnapshot) => {
  //   const data = [];
  //   querySnapshot.forEach((doc) => {
  //     const { name, category, purpose, description, material } = doc.data();
  //     data.push({
  //       key: doc.id,
  //       doc, // DocumentSnapshot
  //       name,
  //       category,
  //       material,
  //       purpose,
  //       description
  //     });
  //   });
  //   this.setState({
  //     data
  //   });
  // }

  render() {

    return (
      <section className="workoutPage">
        <div className="workoutPage-wrapper">
          <h2>ÖVNINGSBANK</h2>
          <Filter />
          {/* {this.state.data.map(each =>
          <ul className="workoutPage-list" key={each.id}>
            <li className="listName">{each.name}</li>
            <li className="listType">{each.category}</li>
            <li>Syfte:{each.purpose}</li>
            <li>Material:{each.material}</li>
            <li>Beskrivning: {each.description}</li>
          </ul>
        )} */}
          <Menu />
        </div>
      </section >
    );
  }
}


export default Workoutbank;