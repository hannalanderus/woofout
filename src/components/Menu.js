import React, { Component } from 'react';
import '../resources/scss/style.scss';


class Menu extends Component {

    render() {


        return (

            <div>
                <ul className="navMenu">
                    <a className="profileIcon" href="/Profile">Profil</a>
                    <a className="profileDogIcon" href="/ProfileDog">Profil Hund</a>
                    <a className="regDogIcon" href="/RegistrationDog">Lägg till hund</a>
                    <a className="workoutBankIcon" href="/WorkoutBank">Övningsbank</a>
                    {/* <a className="workoutLoggIcon" href="/WorkoutLogg">Träningslogg</a> */}
                </ul>
            </div>
        )

    }
}

export default Menu;