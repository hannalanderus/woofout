import React, { Component } from 'react';
import firebase from './config/Fire';
import storage from './config/Fire';
import '../resources/scss/style.scss';


class ImageUploadProfile extends Component {


  constructor(props) {
    super(props);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeUploadImage = this.handleChangeUploadImage.bind(this);
    this.state = {
      image: null,
      url: '',
    }
  }


  handleChangeImage(e) {
    //so you can see  preview of the image and save/store file
    let preview = document.querySelector('img');
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();
    //preview of the image
    reader.addEventListener("load", () => {
      preview.src = reader.result;
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
    //udate state
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({ 'image': image });

    }
  }

  handleChangeUploadImage(e) {
    //send the image to storage in firebase
    e.preventDefault();
    let image = this.state.image;
    firebase.auth().onAuthStateChanged((user) => {
      var current = firebase.auth().currentUser.uid;
      var metadata = {
        customMetadata: {
          'id': current
        }
      }
      //create folder (test is the name of the folder, dont know how to change it now after testing), with image
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('profileimage/' + current + '.jpg').put(image, metadata);

      console.log(imageRef);

      return imageRef.on('state_changed', (snapshot) => {
      },
        (error) => {
          //error function
          console.log(error);

        },
        () => {
          //complete function
          storageRef.child('profileimage/' + current + '.jpg').getDownloadURL().then(url => {
            console.log(url);

          })

        });

    });
  }

  render() {
    return (
      <div className="RegistrationDogPage-form">
        <input onChange={this.handleChangeImage} type="file"></input>
        <img src={this.state.url} className="addedImage" alt=" preview"></img>
        <button onClick={this.handleChangeUploadImage} className="whiteButton">Bild</button>
      </div>
    );
  }
}


export default ImageUploadProfile;

