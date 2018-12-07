import React, { Component } from 'react';
import firebase from './config/Fire';
import storage from './config/Fire';
import Header from './Header';
import '../resources/scss/style.scss';


class ImageUpload extends Component {

  constructor(props) {
    super(props);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeUploadImage = this.handleChangeUploadImage.bind(this);
    this.newDog = this.newDog.bind(this);
    this.state = {
     image: null,
     url: '',
    }
  }
  newDog(e) {
    e.preventDefault();
    var db = firebase.firestore();
    var userdog = firebase.auth().currentUser;
    db.collection("dog").add({
      name: this.state.name,
      breed: this.state.breed,
      size: this.state.size,
      weight: this.state.weight,
      userID: userdog.uid,
    }).then(function () {
      alert("Document successfully written!");
      window.location.href = "/RegistrationDog";
    }).catch(function (error) {
      alert("Got an error", error);
    });
  }

handleChangeImage (e) {
  console.log(JSON.stringify(firebase.storage))
  if(e.target.files[0]){
  const image = e.target.files[0];
  this.setState({ image });
  }
  }
  handleChangeUploadImage (e){
    e.preventDefault();
    const { image } = this.state;
    const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on('state_changed',
    (snapshot) => {
    //progress function

    }, 
    (error) => {
    //error function
    console.log(error);

    },
    () => {
    //complete function
    storage.ref('images').child(image.name).getDownloadURL().then(url =>{
      console.log(url);
    })

    });
  }

  render() {
  console.log(this.state.image);
    return (
      <div>
        <input onChange={this.handleChangeImage} type="file"></input>
        <button onClick={this.handleChangeUploadImage} className="greyButton">Ladda upp</button>
      </div>
    );
  }
}


export default ImageUpload;

