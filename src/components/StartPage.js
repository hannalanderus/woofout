import React from 'react';
import '../App.css';

const StartPage = () => {

    return (
      <div className="App">
      <div id="headerWrapper">
        <h1>WOFFOUT</h1>
      </div>
        <header className="App-header">
          <div className="inputWrapper">
          <input type="text" id="username" placeholder="Användarnamn"></input>
          <input  type="password" id="password" placeholder="Lösenord"></input>
          <button className="button" id="login">Log in</button>
          </div>
        </header>
      </div>

    );

}


export default StartPage;
