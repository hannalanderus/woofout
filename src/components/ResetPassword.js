import React, { Component } from 'react';
import fire from './config/Fire';
import Header from './Header';
import '../resources/scss/style.scss';


class ResetPassword extends Component {

  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.losenord = this.losenord.bind(this);
    this.state = {
      emailReset: '',
      user: { user: false }
    }
  }


  componentDidMount() {
    this.authListener();
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user: true });
        console.log('inloggad');

      } else {
        console.log('ej loggad');
      }
    });
  }

  losenord(e) {
    e.preventDefault();
    fire.auth().sendPasswordResetEmail(this.state.emailReset).then((u) => {
      window.location.href = "/";
    }).catch(function (error) {
      alert('Du måste fylla i en mailadress');
    });
  }
  handleReset(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {


    return (

      <div>
        <div className="StartPage-wrapper">
          < Header />
          <form class="resetForm">
            <h1 class="reset">Återställ ditt lösenord</h1>
            <input value={this.state.emailReset} onChange={this.handleReset} id="resetfield" placeholder="mailadress" type="emailReset" name="emailReset"></input>
            <button onClick={this.losenord} id="resetbutton" className="smallLinkButton">Återställ</button>
          </form>
        </div>
      </div>
    );


  }
}


export default ResetPassword;
