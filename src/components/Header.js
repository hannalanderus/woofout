import React from 'react';
import '../resources/scss/style.scss';


const Header = () => {

  return (
    <div className="StartPage-header">
      <a href="/"><h1 className="woofout">Woofout</h1></a>
      <h1 className="registartionHeadline">Registrering</h1>
      <h1 className="profileHeadline">Profil</h1>
      <h1 className="dogs">Dina hundar</h1>
    </div>

  );

}


export default Header;
