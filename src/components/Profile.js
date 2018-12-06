import React, { Component } from 'react';
import Header from './Header';
import fire from './config/Fire';
import '../resources/scss/style.scss';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      data: [],

    };
  }

  logout() {
    fire.auth().signOut().then((u) => {
      window.location.href = "/";
    }).catch((error) => {
      console.log(error);
    });
  }


  componentDidMount() {
    fire.auth().onAuthStateChanged((user) => {
      var current = fire.auth().currentUser;
      const database = fire.firestore().collection("users").doc(current.uid);
      //console.log(user.uid);
      //console.log(current.uid);
      if (user) {
        this.setState({ user: user.uid });
        console.log('inloggad');
      } else {
        console.log('ej loggad');
      }
      database.get().then((doc) => {
        let profilData = doc.data();
        // console.log(profilData);
        this.setState({ data: profilData });

      })
        .catch(function (error) {
          console.log(error);
        })

    });

  }


  render() {

    return (

      <div className="App-profile">
        < Header />

        <section className="ProfilePage">
          <div className="ProfilePage-wrapper">
            <div className="ProfilePage-userInfo">
              <h1>{this.state.data.name}</h1>
              <h1>{this.state.data.surname}</h1>
            </div>
            <div className="ProfilePage-listlinks">
              <a className="dogsButton" href="/ProfileDog">Mina Hundar</a>
            </div>
          </div>
          {/* <button onClick={this.logout} className="button" id="logout">Log out</button> */}
        </section>

      </div>
    );
  }
}


export default Profile;
