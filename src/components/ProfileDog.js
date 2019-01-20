import React, { Component } from 'react';
import firebase from './config/Fire';
import fire from './config/Fire';
import Menu from './Menu';
import '../resources/scss/style.scss';

class ProfileDog extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      data: [],
      id: [],
      image: [],
      url: '',
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
      firebase.auth().onAuthStateChanged((user) => {
        var current = firebase.auth().currentUser.uid;
        var storageRef = firebase.storage().ref("test/" + current + '.jpg');
        storageRef.getDownloadURL().then(url => {
          console.log(url);
          this.setState({ url: url })

        })
        console.log(storageRef);
        /****************************************/

        this.setState({ id: current.uid });
        fire.firestore().collection("dog").where("userID", "==", current)
          .get()
          .then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
              const { name, breed, size, weight, userID, image } = doc.data();
              data.push({
                id: doc.id,
                doc, // DocumentSnapshot
                name,
                breed,
                size,
                weight,
                userID,
                image,
              });
            });
            this.setState({ data });
          })
      })
    })
  }

  render() {

    console.log(this.state.url)


    return (
      <div className="App-profileDog">
        <section className="ProfileDogPage">
          <div className="custom-headerDog">
            <div className="ProfileDogPage-title">
              <h1>MINA HUNDAR</h1><br />
            </div>
          </div>
          <div className="ProfileDogPage-wrapper">

            {this.state.data.map(each =>
              <div className="flexWrapper">
                <div className="imageWrapper">
                  <a className="profileLink" href="/ImageUpload"><div className="imageHover"><p>Uppdatera bild</p></div></a>
                  <img src={this.state.url} className="addedImage" alt="test" />
                </div>
                <ul className="ProfileDogPage-list" key={each.id}>
                  <h2>{each.name}</h2>
                  <li>{each.breed}</li>
                  <li>{each.size}</li>
                  <li>{each.weight}</li>
                </ul>
              </div>
            )}
          </div>
        </section >
        <Menu />
      </div >
    );
  }
}


export default ProfileDog;