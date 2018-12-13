import React, { Component } from 'react';
import firebase from './config/Fire.js';
import '../resources/scss/style.scss';


class Filter extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: '',
            data: []
        }
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target });
        console.log(this.state.name);
    }

    filterResults(e) {
        const current = this.state.name
        console.log(this.state.name);
        const database = firebase.database().collection('trainingprogram').where("category", "==", current)
        database.onSnapshot(this.getCollection);

    }

    getCollection = (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
            const { name, category, purpose, description, material } = doc.data();
            data.push({
                key: doc.id,
                doc, // DocumentSnapshot
                name,
                category,
                material,
                purpose,
                description
            });
        });
        this.setState({
            data
        });
    }

    render() {

        return (
            <section className="workoutPage">
                <div className="workoutPage-wrapper">
                    <div>
                        <ul>
                            <li value={this.state.name} onClick={this.handleChange} type="name" name="Styrka">Styrka</li>
                            <li value={this.state.name} onClick={this.handleChange} type="name" name="Stabilitet">Stabilitet</li>
                            <li value={this.state.name} onClick={this.handleChange} type="name" name="Rörelse">Rörelse</li>
                            <li value={this.state.name} onClick={this.handleChange} type="name" name="Balans">Balans</li>
                            <li value={this.state.name} onClick={this.handleChange} type="name" name="Lorem">Lorem</li>
                            <li value={this.state.name} onClick={this.handleChange} type="name" name="Ipsum">Ipsum</li>

                        </ul>

                    </div>

                    {this.state.data.map(each =>
                        <ul className="workoutPage-list" key={each.id}>
                            <li className="listName">{each.name}</li>
                            <li className="listType">{each.category}</li>
                            <li>Syfte:{each.purpose}</li>
                            <li>Material:{each.material}</li>
                            <li>Beskrivning: {each.description}</li>
                        </ul>
                    )}
                </div>

            </section>
        )
    }
}

export default Filter;