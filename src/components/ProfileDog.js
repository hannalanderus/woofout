import React, { Component } from 'react';
import firebase from './config/Fire';
import fire from './config/Fire';
import '../resources/scss/style.scss';

class ProfileDog extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      data: [],
      id:[],
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
      const database = fire.firestore().collection("dog").doc("83yCvEVLpp0gYWkxAyXw");/* detta e hund nr 2 "fv2EMZKQcSjCGdKMxo3G"*/
      console.log(current.uid);
      if(this.state.data.userID === current){
        console.log('hej');
      }if (user) {
        this.setState({ user: user.uid });
        console.log('inloggad');
      } else{
        console.log('ej loggad');
      }
      database.get().then((doc) => {
      let profilData = doc.data();
      console.log(profilData);
      console.log(profilData.userID);
      this.setState({ data: profilData });
    })
      .catch(function (error) {
        console.log(error);
      })

    });
          
  }


  render() {

    if(this.state.data.userID === this.state.id){
      return(
      <div className ="App">
        <div id="headerWrapper">
          <h1>HUNDAR</h1>
        </div>
         <section className="workoutPage">
            <div className="workoutPage-wrapper">
              <h1>Namn: {this.state.data.name}</h1>
              <h1>Ras: {this.state.data.breed}</h1>
              <h1>Storlek: {this.state.data.size}</h1>
              <h1>Vikt: {this.state.data.weight}</h1>
            </div>
         </section>
    </div>
        );

    } else {
      return (
      <div className ="App">
              <h1>Inga hundar registrerade</h1>
      </div>
      );
    }
    
   }
}


export default ProfileDog;
