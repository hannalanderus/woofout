import React, { Component } from 'react';
import firebase from './config/Fire.js';
import fire from './config/Fire';
import '../resources/scss/style.scss';


class Filter extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.filterResults = this.filterResults.bind(this);
        this.state = {
            name: '',
            data: []
        }
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.name)
    }

    filterResults(e) {
        const current = this.state.name
        console.log(this.state.name);

        fire.firestore().collection('trainingprogram').where("category", "==", current)
            .get()
            .then((querySnapshot) => {
                const data = [];
                querySnapshot.forEach((doc) => {
                    const { name, category, purpose, material, description } = doc.data();
                    data.push({
                        id: doc.id,
                        doc, // DocumentSnapshot
                        name,
                        category,
                        purpose,
                        material,
                        description,

                    });
                    //console.log(this.state.image);
                });
                this.setState({ data });
            })
    }


    render() {

        return (
            <div>


                <input value={this.state.name} onChange={this.handleChange} type="name" name="name"></input>
                <button onClick={this.filterResults} className="greyButton" id="signUp">Sök</button>
                {/* <li value={this.state.name} onClick={this.handleChange} type="name" name="Rörelse">Rörelse</li>
                <li value={this.state.name} onClick={this.handleChange} type="name" name="Balans">Balans</li>
                <li value={this.state.name} onClick={this.handleChange} type="name" name="Lorem">Lorem</li>
                <li value={this.state.name} onClick={this.handleChange} type="name" name="Ipsum">Ipsum</li> */}
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
        )
    }
}

export default Filter;