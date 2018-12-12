import React, { Component } from 'react';
import firebase from './config/Fire';
import fire from './config/Fire';
import Header from './Header';
import Menu from './Menu';
import '../resources/scss/style.scss';

class ProfileDog extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      data: [],
      id: [],
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
    fire.auth().onAuthStateChanged((user) => {
      var current = firebase.auth().currentUser;
      this.setState({ id: current.uid });

      fire.firestore().collection("dog").where("userID", "==", current.uid)
        .get()
        .then((querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            const { name, breed, size, weight, userID } = doc.data();
            data.push({
              id: doc.id,
              doc, // DocumentSnapshot
              name,
              breed,
              size,
              weight,
              userID,
            });
            //console.log(doc.data());
          });
          this.setState({ data });
        })
    })

  }

  render() {

    return (
      <div className="App-profileDog">
        <section className="ProfileDog">
          <div className="custom-headerDog">
            <div className="ProfileDogPage-title">
              <h1>MINA HUNDAR</h1><br />
            </div>
          </div>
          <div className="ProfileDogPage-wrapper">
            {this.state.data.map(each =>
              <ul className="ProfileDogPage-list" key={each.id}>
                <li>{each.name}</li>
                <li>{each.breed}</li>
                <li>{each.size}</li>
                <li>{each.weight}</li>
              </ul>
            )}

          </div>
        </section>
        <Menu />
      </div>
    );
  }
}


export default ProfileDog;