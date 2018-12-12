import React, { Component } from 'react';
import '../resources/scss/style.scss';


class Menu extends Component {

    render() {


        return (

            <div>
                <ul className="navMenu">
                    <a href="/">Start</a>
                    <a href="/Profile">Profil</a>
                    <a href="/ProfileDog">Profil Hund</a>
                    <a href="/WorkoutBank">Övningsbank</a>
                    <a href="/WorkoutLogg">Träningslogg</a>
                </ul>
            </div>
        )

    }
}

export default Menu;