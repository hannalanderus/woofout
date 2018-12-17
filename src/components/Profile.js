import React, { Component } from 'react';
import firebase from './config/Fire';
import Header from './Header';
import Menu from './Menu';
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
      /****************** Show Profile image **********************/
      var current = firebase.auth().currentUser.uid;
      // })
      var storageRef = firebase.storage().ref("profileimage/" + current + '.jpg');
      storageRef.getDownloadURL().then(url => {
        console.log(url);
        this.setState({ url: url })

      })
      /****************************************/

      if (user) {
        this.setState({ user: user.uid });
        console.log('inloggad');
      } else {
        console.log('ej loggad');
      }
      database.get().then((doc) => {
        let profilData = doc.data();

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
        <section className="ProfilePage">
          <span className="logoSpan">Woofout</span>
          <div className="custom-header">
            <div className="ProfilePage-title">
              <h1>Profil</h1><br />


            </div>
            <div className="ProfilePage-userInfo">
              <h2>{this.state.data.name}</h2>
              <h2>{this.state.data.surname}</h2>
            </div>
            <div className="flexWrapper">
              <div className="imageWrapper">
                <img src={this.state.url} className="addedImage" alt="test" />
              </div>
            </div>
            <div className="ProfilePage-wrapper">
              <div className="ProfilePage-listlinks">
                <a className="profileLink" href="/ProfileDog"><button className="whiteButton">Mina Hundar</button></a>
                <button onClick={this.logout} className="whiteButton" id="logout">Logga ut</button>
              </div>
            </div>
          </div>
        </section>
        <Menu />
      </div>
    );
  }
}


export default Profile;
