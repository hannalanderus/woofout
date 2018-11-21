import React from 'react';
import '../App.css';

const HamburgerMenu = () => {

    return (
      <div id="hamburger" className="overlay">          
            <div className="menuWrapper">
                <ul>
                    <a href="/Registration"><p>REGISTRERING</p></a>
                    <a href="/Profile"><p>PROFIL</p></a>
                    <a href="/WorkoutBank"><p>ÖVNINGSBANK</p></a>
                </ul>               
            </div>                
      </div>
    );

}


export default HamburgerMenu;

