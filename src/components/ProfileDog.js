import React, { Component } from 'react';
import firebase from './config/Fire';
import fire from './config/Fire';
import Header from './Header';
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
     /**display image***/
      let image = this.state.image;
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('test/' + image);
      console.log(imageRef);
      //this.setState({ image: 'https://firebasestorage.googleapis.com/v0/b/woofout-36aca.appspot.com/o/test%2Fbossebulldog.jpg?alt=media&token=254b8be0-1816-4987-9e81-e4457bc40df6' })    
      storageRef.child('test/' + image.name).getDownloadURL().then(url =>{
      this.setState({ url : url });
      
    })
        console.log(this.state.url);
    /****************************************/
      var current = firebase.auth().currentUser;
      this.setState({ id: current.uid });
      fire.firestore().collection("dog").where("userID", "==", current.uid)
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
            //console.log(this.state.image);
          });
          this.setState({ data });
        })
    })

  }

  render() {
    console.log(this.state.url)

    return (
      <div className="App-profileDog">
       < Header />
        <section className="workoutPage">
          <div className="workoutPage-wrapper">
            {this.state.data.map(each =>
              <ul className="workoutPage-list" key={each.id}>
                <li>{each.name}</li>
                <li>{each.breed}</li>
                <li>{each.size}</li>
                <li>{each.weight}</li>
                <img src={ this.state.image } className="addedImage" alt="test" />
              </ul>
            )}
          </div>
        </section>
      </div>
    );
  }
}


export default ProfileDog;