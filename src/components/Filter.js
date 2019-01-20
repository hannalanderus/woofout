import React, { Component } from 'react';
import '../resources/scss/style.scss';


class Filter extends Component {


    render() {

        return (
            <div>
                <ul className="workoutPage-list" key={this.props.id}>
                    <h3 className="listName">{this.props.name}</h3>
                    <li className="listType">{this.props.category}</li>
                    <li><h4>Syfte:</h4>{this.props.purpose}</li>
                    <li><h4>Material:</h4>{this.props.material}</li>
                    <li><h4>Beskrivning:</h4>{this.props.description}</li>
                </ul>
            </div>
        )
    }
}

export default Filter;