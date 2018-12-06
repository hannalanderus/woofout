import React, { Component } from 'react';
import fire from './config/Fire';
import Header from './Header';
import '../resources/scss/style.scss';


class ResetPassword extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.losenord = this.losenord.bind(this);
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
        console.log('ej loggad');
      }
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
          <form>
            <h1>Återställ ditt lösenord</h1>
            <input value={this.state.emailReset} onChange={this.handleChange} id="reset" placeholder="mailadress" type="email" name="emailReset"></input>
            <button onClick={this.losenord} className="smallLinkButton">Återställ</button>
          </form>
        </div>
      </div>
    );


  }
}


export default ResetPassword;