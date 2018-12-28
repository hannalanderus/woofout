import React, { Component } from 'react';
import firebase from './config/Fire.js';
import fire from './config/Fire';
import '../resources/scss/style.scss';


class Filter extends Component {


    render() {

        return (
            <div>
                 <ul className="workoutPage-list" key={this.props.id}>
                    <li className="listName">{this.props.name}</li>
                    <li className="listType">{this.props.category}</li>
                    <li>Syfte:{this.props.purpose}</li>
                    <li>Material:{this.props.material}</li>
                    <li>Beskrivning: {this.props.description}</li>
                   </ul>          
            </div>
        )
    }
}

export default Filter;