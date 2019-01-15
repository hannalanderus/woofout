import React, { Component } from 'react';
import fire from './config/Fire';
import Header from './Header';
import '../resources/scss/style.scss';


class StartPage extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.losenord = this.losenord.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      email: '',
      emailReset: '',
      password: '',
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
        /*this.setState({ user : false});*/
        /*alert('fel fel fel, fel email eller lösen')*/
        console.log('ej loggad');
      }
    });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      window.location.href = "/profile";
    }).catch((error) => {
      console.log(error);
    });

  }

  logout() {
    fire.auth().signOut().then((u) => {
      window.location.href = "/";
    }).catch((error) => {
      console.log(error);
    });
  }

  losenord(e) {
    e.preventDefault();
    fire.auth().sendPasswordResetEmail(this.state.emailReset).then((u) => {
      window.location.href = "/";
    }).catch(function (error) {
      console.log(error);
    });
  }
  handleReset(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {


    return (

      <div>
        <div className="StartPage-wrapper">
          < Header />
          <div className="StartPage-input">
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="username" placeholder="Mailadress" required></input>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password" placeholder="Lösenord" required></input>
            <button className="smallLinkButton" id="losenord"><a href="/ResetPassword">Glömt lösenord</a></button>
            <button onClick={this.login} className="button" id="login">Logga in</button>
            <button className="linkButton" id="signup"><a href="/Registration">Skapa konto</a></button>
          </div>
          {/* <form>
            <h1>Återställ ditt lösenord</h1>
            <input value={this.state.emailReset} onChange={this.handleChange} id="reset" placeholder="mailadress" type="email" name="emailReset"></input>
            <button onClick={this.losenord} className="smallLinkButton">Återställ</button>
          </form>
          */}
        </div>
      </div>
    );


  }
}


export default StartPage;
