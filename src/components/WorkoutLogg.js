import React, { Component } from 'react';
import firebase from './config/Fire.js';
import Menu from './Menu';
import '../resources/scss/style.scss';

class WorkoutLogg extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        const database = firebase.firestore().collection('trainingprogram');
        database.onSnapshot(this.getCollection);

    }


    render() {

        return (
            <div>

            </div>
        )
    }
}

export default WorkoutLogg;