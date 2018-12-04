import React, { Component } from 'react';
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
    const database = fire.firestore().collection("users").doc("0C6jIHvMXkgI4P2MhaMXswnApaz1");
    database.get().then(function (doc) {
      let profilData = doc.data();
      console.log(profilData);

    })
      .catch(function (error) {
        console.log(error);
      })
    this.setState({
      data: profilData
    })
  }

  render() {


    return (
      <div className="App" >
        <div id="headerWrapper">
          <a href="/"><div className="logo"><h1>WOFFOUT</h1></div></a>
          <h2>PROFIL</h2>
          {this.state.data.map(each =>
            <ul className="workoutPage-list">
              <li>{each.name}</li>
            </ul>
          )}
        </div>
        <header className="App-header">
          <button onClick={this.logout} className="button" id="logout">Log out</button>

        </header>
      </div>
    );
  }
}


export default Profile;
