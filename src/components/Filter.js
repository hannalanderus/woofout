import React, { Component } from 'react';
import firebase from './config/Fire.js';
import fire from './config/Fire';
import '../resources/scss/style.scss';


class Filter extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.filterResults = this.filterResults.bind(this);
        this.state = {
            name: '',
            //data: []
        }
    }


    handleChange = (val) => {
        this.setState({name : val});
        //this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.name)
    }

    // filterResults(e) {
    //     const current = this.state.name
    //     console.log(this.state.name);

    //     fire.firestore().collection('trainingprogram').where("category", "==", current)
    //         .get()
    //         .then((querySnapshot) => {
    //             const data = [];
    //             querySnapshot.forEach((doc) => {
    //                 const { name, category, purpose, material, description } = doc.data();
    //                 data.push({
    //                     id: doc.id,
    //                     doc, // DocumentSnapshot
    //                     name,
    //                     category,
    //                     purpose,
    //                     material,
    //                     description,

    //                 });
    //                 //console.log(this.state.image);
    //             });
    //             this.setState({ data });
    //         })
    // }


    render() {

        return (
            <div>
                {/*<button onClick={this.filterResults} className="greyButton" id="signUp">Sök</button>*/}
                <li onClick={this.handleChange.bind(this, "Rörlighet")}>Rörlighet</li>
                <li onClick={this.handleChange.bind(this, "Balans")}>Balans</li>
                <li onClick={this.handleChange.bind(this, "Stabilitet")}>Stabilit</li>        
            </div>
        )
    }
}

export default Filter;