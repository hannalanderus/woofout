import React, { Component } from 'react';
import firebase from './config/Fire.js';
import Menu from './Menu';
import Filter from './Filter';
import '../resources/scss/style.scss';

class Workoutbank extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [],
      type: ''
    };
  }

  handleChange = (val) => {
    this.setState({ type: val });
    console.log(this.state.type)
    if (this.state.type) {
      const current = this.state.type;
      const database = firebase.firestore().collection('trainingprogram').where("category", "==", current);
      database.onSnapshot(this.getCollection);
    }
  }
  handleReload = () => {
    window.location.href = "/WorkoutBank";
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
      data,
    });
  }

  render() {


    return (
      <div>

        <section className="workoutPage">
          <div className="workoutPage-wrapper">
            <span className="logoSpan">Woofout</span>
            <div className="header">
              <h1>Övningsbank</h1>
            </div>
            <div className="filterWrapper">
              <h2>FILTRERA</h2>
              <ul>
                <li onClick={this.handleChange.bind(this, "Rörlighet")}>Rörlighet</li>
                <li onClick={this.handleChange.bind(this, "Balans")}>Balans</li>
                <li onClick={this.handleChange.bind(this, "Stabilitet")}>Stabilitet</li>

                <li onClick={this.handleReload}>Alla</li>
              </ul>
            </div>
            {this.state.data.map(each => {
              return (
                <Filter
                  key={each.id}
                  id={each.id}
                  name={each.name}
                  category={each.category}
                  purpose={each.purpose}
                  material={each.material}
                  description={each.description}
                />
              );
            })}
          </div>
        </section >
        <Menu />
      </div>

    );
  }
}


export default Workoutbank;